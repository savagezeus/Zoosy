import { addCallback, removeCallback } from '../helpers/fid-changed';
import { FirebaseDependencies } from '../interfaces/firebase-dependencies';

export type IdChangeCallbackFn = (installationId: string) => void;
export type IdChangeUnsubscribeFn = () => void;

/**
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 */
export function onIdChange(
  { appConfig }: FirebaseDependencies,
  callback: IdChangeCallbackFn
): IdChangeUnsubscribeFn {
  addCallback(appConfig, callback);

  return () => {
    removeCallback(appConfig, callback);
  };
}
