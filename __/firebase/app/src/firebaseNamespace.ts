import { FirebaseNamespace } from '@firebase/app-types';
import { _FirebaseApp, _FirebaseNamespace } from '@firebase/app-types/private';
import { createSubscribe, deepExtend, ErrorFactory } from '@firebase/util';
import { FirebaseAppImpl } from './firebaseApp';
import { createFirebaseNamespaceCore } from './firebaseNamespaceCore';

/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
export function createFirebaseNamespace(): FirebaseNamespace {
  const namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
  (namespace as _FirebaseNamespace).INTERNAL = {
    ...(namespace as _FirebaseNamespace).INTERNAL,
    createFirebaseNamespace,
    extendNamespace,
    createSubscribe,
    ErrorFactory,
    deepExtend
  };

  /**
   * Patch the top-level firebase namespace with additional properties.
   *
   * firebase.INTERNAL.extendNamespace()
   */
  function extendNamespace(props: { [prop: string]: unknown }): void {
    deepExtend(namespace, props);
  }

  return namespace;
}

export const firebase = createFirebaseNamespace();
