import { Provider } from './provider';
import { Component } from './component';
import { Name } from './types';

/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
export class ComponentContainer {
  private readonly providers = new Map<string, Provider<Name>>();

  constructor(private readonly name: string) {}

  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent<T extends Name>(component: Component<T>): void {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error(
        `Component ${component.name} has already been registered with ${this.name}`
      );
    }

    provider.setComponent(component);
  }

  addOrOverwriteComponent<T extends Name>(component: Component<T>): void {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      // delete the existing provider from the container, so we can register the new component
      this.providers.delete(component.name);
    }

    this.addComponent(component);
  }

  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider<T extends Name>(name: T): Provider<T> {
    if (this.providers.has(name)) {
      return this.providers.get(name) as Provider<T>;
    }

    // create a Provider for a service that hasn't registered with Firebase
    const provider = new Provider<T>(name, this);
    this.providers.set(name, provider);

    return provider as Provider<T>;
  }

  getProviders(): Array<Provider<Name>> {
    return Array.from(this.providers.values());
  }
}
