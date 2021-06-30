import { version } from '../../package.json';

export const PENDING_TIMEOUT_MS = 10000;

export const PACKAGE_VERSION = `w:${version}`;
export const INTERNAL_AUTH_VERSION = 'FIS_v2';

export const INSTALLATIONS_API_URL =
  'https://firebaseinstallations.googleapis.com/v1';

export const TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour

export const SERVICE = 'installations';
export const SERVICE_NAME = 'Installations';
