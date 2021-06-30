import { FirebaseApp, FirebaseOptions } from '@firebase/app-types';
import { FirebaseError } from '@firebase/util';
import { AppConfig } from '../interfaces/app-config';
import { ERROR_FACTORY, ErrorCode } from '../util/errors';

export function extractAppConfig(app: FirebaseApp): AppConfig {
  if (!app || !app.options) {
    throw getMissingValueError('App Configuration');
  }

  if (!app.name) {
    throw getMissingValueError('App Name');
  }

  // Required app config keys
  const configKeys: Array<keyof FirebaseOptions> = [
    'projectId',
    'apiKey',
    'appId'
  ];

  for (const keyName of configKeys) {
    if (!app.options[keyName]) {
      throw getMissingValueError(keyName);
    }
  }

  return {
    appName: app.name,
    projectId: app.options.projectId!,
    apiKey: app.options.apiKey!,
    appId: app.options.appId!
  };
}

function getMissingValueError(valueName: string): FirebaseError {
  return ERROR_FACTORY.create(ErrorCode.MISSING_APP_CONFIG_VALUES, {
    valueName
  });
}
