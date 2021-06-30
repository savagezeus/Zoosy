import { AppConfig } from '../interfaces/app-config';

/** Returns a string key that can be used to identify the app. */
export function getKey(appConfig: AppConfig): string {
  return `${appConfig.appName}!${appConfig.appId}`;
}
