import { getInstallationEntry } from '../helpers/get-installation-entry';
import { refreshAuthToken } from '../helpers/refresh-auth-token';
import { AppConfig } from '../interfaces/app-config';
import { FirebaseDependencies } from '../interfaces/firebase-dependencies';

export async function getToken(
  dependencies: FirebaseDependencies,
  forceRefresh = false
): Promise<string> {
  await completeInstallationRegistration(dependencies.appConfig);

  // At this point we either have a Registered Installation in the DB, or we've
  // already thrown an error.
  const authToken = await refreshAuthToken(dependencies, forceRefresh);
  return authToken.token;
}

async function completeInstallationRegistration(
  appConfig: AppConfig
): Promise<void> {
  const { registrationPromise } = await getInstallationEntry(appConfig);

  if (registrationPromise) {
    // A createInstallation request is in progress. Wait until it finishes.
    await registrationPromise;
  }
}
