import { FirebaseNamespace } from '@firebase/app-types';
import { _FirebaseNamespace } from '@firebase/app-types/private';
import { Component, ComponentType } from '@firebase/component';
import { PlatformLoggerService } from './platformLoggerService';
import { name, version } from '../package.json';

export function registerCoreComponents(
  firebase: FirebaseNamespace,
  variant?: string
): void {
  (firebase as _FirebaseNamespace).INTERNAL.registerComponent(
    new Component(
      'platform-logger',
      container => new PlatformLoggerService(container),
      ComponentType.PRIVATE
    )
  );
  // Register `app` package.
  firebase.registerVersion(name, version, variant);
  // Register platform SDK identifier (no version).
  firebase.registerVersion('fire-js', '');
}
