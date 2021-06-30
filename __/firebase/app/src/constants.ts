export const DEFAULT_ENTRY_NAME = '[DEFAULT]';
import { name as appName } from '../package.json';
import { name as analyticsName } from '../../analytics/package.json';
import { name as authName } from '../../auth/package.json';
import { name as databaseName } from '../../database/package.json';
import { name as functionsName } from '../../functions/package.json';
import { name as installationsName } from '../../installations/package.json';
import { name as messagingName } from '../../messaging/package.json';
import { name as performanceName } from '../../performance/package.json';
import { name as remoteConfigName } from '../../remote-config/package.json';
import { name as storageName } from '../../storage/package.json';
import { name as firestoreName } from '../../firestore/package.json';
import { name as packageName } from '../../../package.json';

export const PLATFORM_LOG_STRING = {
  [appName]: 'fire-core',
  [analyticsName]: 'fire-analytics',
  [authName]: 'fire-auth',
  [databaseName]: 'fire-rtdb',
  [functionsName]: 'fire-fn',
  [installationsName]: 'fire-iid',
  [messagingName]: 'fire-fcm',
  [performanceName]: 'fire-perf',
  [remoteConfigName]: 'fire-rc',
  [storageName]: 'fire-gcs',
  [firestoreName]: 'fire-fst',
  'fire-js': 'fire-js', // Platform identifier for JS SDK.
  [packageName]: 'fire-js-all'
} as const;
