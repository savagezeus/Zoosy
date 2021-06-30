import { GenerateAuthTokenResponse } from '../interfaces/api-response';
import { AppConfig } from '../interfaces/app-config';
import { FirebaseDependencies } from '../interfaces/firebase-dependencies';
import {
  CompletedAuthToken,
  RegisteredInstallationEntry
} from '../interfaces/installation-entry';
import { PACKAGE_VERSION } from '../util/constants';
import {
  extractAuthTokenInfoFromResponse,
  getErrorFromResponse,
  getHeadersWithAuth,
  getInstallationsEndpoint,
  retryIfServerError
} from './common';

export async function generateAuthTokenRequest(
  { appConfig, platformLoggerProvider }: FirebaseDependencies,
  installationEntry: RegisteredInstallationEntry
): Promise<CompletedAuthToken> {
  const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);

  const headers = getHeadersWithAuth(appConfig, installationEntry);

  // If platform logger exists, add the platform info string to the header.
  const platformLogger = platformLoggerProvider.getImmediate({
    optional: true
  });
  if (platformLogger) {
    headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
  }

  const body = {
    installation: {
      sdkVersion: PACKAGE_VERSION
    }
  };

  const request: RequestInit = {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  };

  const response = await retryIfServerError(() => fetch(endpoint, request));
  if (response.ok) {
    const responseValue: GenerateAuthTokenResponse = await response.json();
    const completedAuthToken: CompletedAuthToken = extractAuthTokenInfoFromResponse(
      responseValue
    );
    return completedAuthToken;
  } else {
    throw await getErrorFromResponse('Generate Auth Token', response);
  }
}

function getGenerateAuthTokenEndpoint(
  appConfig: AppConfig,
  { fid }: RegisteredInstallationEntry
): string {
  return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
}
