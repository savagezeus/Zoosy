import { CreateInstallationResponse } from '../interfaces/api-response';
import { AppConfig } from '../interfaces/app-config';
import {
  InProgressInstallationEntry,
  RegisteredInstallationEntry,
  RequestStatus
} from '../interfaces/installation-entry';
import { INTERNAL_AUTH_VERSION, PACKAGE_VERSION } from '../util/constants';
import {
  extractAuthTokenInfoFromResponse,
  getErrorFromResponse,
  getHeaders,
  getInstallationsEndpoint,
  retryIfServerError
} from './common';

export async function createInstallationRequest(
  appConfig: AppConfig,
  { fid }: InProgressInstallationEntry
): Promise<RegisteredInstallationEntry> {
  const endpoint = getInstallationsEndpoint(appConfig);

  const headers = getHeaders(appConfig);
  const body = {
    fid,
    authVersion: INTERNAL_AUTH_VERSION,
    appId: appConfig.appId,
    sdkVersion: PACKAGE_VERSION
  };

  const request: RequestInit = {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  };

  const response = await retryIfServerError(() => fetch(endpoint, request));
  if (response.ok) {
    const responseValue: CreateInstallationResponse = await response.json();
    const registeredInstallationEntry: RegisteredInstallationEntry = {
      fid: responseValue.fid || fid,
      registrationStatus: RequestStatus.COMPLETED,
      refreshToken: responseValue.refreshToken,
      authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
    };
    return registeredInstallationEntry;
  } else {
    throw await getErrorFromResponse('Create Installation', response);
  }
}
