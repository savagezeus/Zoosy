import firebase from '@firebase/app';
import '@firebase/installations';
import { FirebaseAnalytics } from '@firebase/analytics-types';
import { FirebaseAnalyticsInternal } from '@firebase/analytics-interop-types';
import { _FirebaseNamespace } from '@firebase/app-types/private';
import {
  factory,
  settings,
  resetGlobalVars,
  getGlobalVars
} from './src/factory';
import { EventName } from './src/constants';
import {
  Component,
  ComponentType,
  ComponentContainer
} from '@firebase/component';
import { ERROR_FACTORY, AnalyticsError } from './src/errors';
import {
  isIndexedDBAvailable,
  validateIndexedDBOpenable,
  areCookiesEnabled,
  isBrowserExtension
} from '@firebase/util';
import { name, version } from './package.json';

declare global {
  interface Window {
    [key: string]: unknown;
  }
}

/**
 * Type constant for Firebase Analytics.
 */
const ANALYTICS_TYPE = 'analytics';

export function registerAnalytics(instance: _FirebaseNamespace): void {
  instance.INTERNAL.registerComponent(
    new Component(
      ANALYTICS_TYPE,
      container => {
        // getImmediate for FirebaseApp will always succeed
        const app = container.getProvider('app').getImmediate();
        const installations = container
          .getProvider('installations')
          .getImmediate();

        return factory(app, installations);
      },
      ComponentType.PUBLIC
    ).setServiceProps({
      settings,
      EventName,
      isSupported
    })
  );

  instance.INTERNAL.registerComponent(
    new Component('analytics-internal', internalFactory, ComponentType.PRIVATE)
  );

  instance.registerVersion(name, version);

  function internalFactory(
    container: ComponentContainer
  ): FirebaseAnalyticsInternal {
    try {
      const analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
      return {
        logEvent: analytics.logEvent
      };
    } catch (e) {
      throw ERROR_FACTORY.create(AnalyticsError.INTEROP_COMPONENT_REG_FAILED, {
        reason: e
      });
    }
  }
}

export { factory, settings, resetGlobalVars, getGlobalVars };

registerAnalytics(firebase as _FirebaseNamespace);

/**
 * Define extension behavior of `registerAnalytics`
 */
declare module '@firebase/app-types' {
  interface FirebaseNamespace {
    analytics(app?: FirebaseApp): FirebaseAnalytics;
  }
  interface FirebaseApp {
    analytics(): FirebaseAnalytics;
  }
}

/**
 * this is a public static method provided to users that wraps four different checks:
 *
 * 1. check if it's not a browser extension environment.
 * 1. check if cookie is enabled in current browser.
 * 3. check if IndexedDB is supported by the browser environment.
 * 4. check if the current browser context is valid for using IndexedDB.
 *
 */
async function isSupported(): Promise<boolean> {
  if (isBrowserExtension()) {
    return false;
  }
  if (!areCookiesEnabled()) {
    return false;
  }
  if (!isIndexedDBAvailable()) {
    return false;
  }

  try {
    const isDBOpenable: boolean = await validateIndexedDBOpenable();
    return isDBOpenable;
  } catch (error) {
    return false;
  }
}
