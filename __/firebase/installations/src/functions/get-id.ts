import { getInstallationEntry } from '../helpers/get-installation-entry';
import { refreshAuthToken } from '../helpers/refresh-auth-token';
import { FirebaseDependencies } from '../interfaces/firebase-dependencies';

export async function getId(
  dependencies: FirebaseDependencies
): Promise<string> {
  const { installationEntry, registrationPromise } = await getInstallationEntry(
    dependencies.appConfig
  );

  if (registrationPromise) {
    registrationPromise.catch(console.error);
  } else {
    // If the installation is already registered, update the authentication
    // token if needed.
    refreshAuthToken(dependencies).catch(console.error);
  }

  return installationEntry.fid;
}
