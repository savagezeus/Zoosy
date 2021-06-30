import { AppConfig } from '../interfaces/app-config';
import { RegisteredInstallationEntry } from '../interfaces/installation-entry';
import {
  getErrorFromResponse,
  getHeadersWithAuth,
  getInstallationsEndpoint,
  retryIfServerError
} from './common';

export async function deleteInstallationRequest(
  appConfig: AppConfig,
  installationEntry: RegisteredInstallationEntry
): Promise<void> {
  const endpoint = getDeleteEndpoint(appConfig, installationEntry);

  const headers = getHeadersWithAuth(appConfig, installationEntry);
  const request: RequestInit = {
    method: 'DELETE',
    headers
  };

  const response = await retryIfServerError(() => fetch(endpoint, request));
  if (!response.ok) {
    throw await getErrorFromResponse('Delete Installation', response);
  }
}

function getDeleteEndpoint(
  appConfig: AppConfig,
  { fid }: RegisteredInstallationEntry
): string {
  return `${getInstallationsEndpoint(appConfig)}/${fid}`;
}
