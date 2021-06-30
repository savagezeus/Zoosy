import {
    ComponentContainer,
    ComponentType,
    Provider,
    Name
  } from '@firebase/component';
  
  export class PlatformLoggerService {
    constructor(private readonly container: ComponentContainer) {}
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString(): string {
      const providers = this.container.getProviders();
      // Loop through providers and get library/version pairs from any that are
      // version components.
      return providers
        .map(provider => {
          if (isVersionServiceProvider(provider)) {
            const service = provider.getImmediate();
            return `${service.library}/${service.version}`;
          } else {
            return null;
          }
        })
        .filter(logString => logString)
        .join(' ');
    }
  }
  /**
   *
   * @param provider check if this provider provides a VersionService
   *
   * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
   * provides VersionService. The provider is not necessarily a 'app-version'
   * provider.
   */
  function isVersionServiceProvider(
    provider: Provider<Name>
  ): provider is Provider<'app-version'> {
    const component = provider.getComponent();
    return component?.type === ComponentType.VERSION;
  }
  