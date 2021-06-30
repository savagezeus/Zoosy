import {
    InstantiationMode,
    InstanceFactory,
    ComponentType,
    Dictionary,
    Name
  } from './types';
  
  /**
   * Component for service name T, e.g. `auth`, `auth-internal`
   */
  export class Component<T extends Name = Name> {
    multipleInstances = false;
    /**
     * Properties to be added to the service namespace
     */
    serviceProps: Dictionary = {};
  
    instantiationMode = InstantiationMode.LAZY;
  
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    constructor(
      readonly name: T,
      readonly instanceFactory: InstanceFactory<T>,
      readonly type: ComponentType
    ) {}
  
    setInstantiationMode(mode: InstantiationMode): this {
      this.instantiationMode = mode;
      return this;
    }
  
    setMultipleInstances(multipleInstances: boolean): this {
      this.multipleInstances = multipleInstances;
      return this;
    }
  
    setServiceProps(props: Dictionary): this {
      this.serviceProps = props;
      return this;
    }
  }
  