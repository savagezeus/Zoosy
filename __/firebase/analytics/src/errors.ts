
 import { ErrorFactory, ErrorMap } from '@firebase/util';

 export const enum AnalyticsError {
   ALREADY_EXISTS = 'already-exists',
   ALREADY_INITIALIZED = 'already-initialized',
   INTEROP_COMPONENT_REG_FAILED = 'interop-component-reg-failed',
   INVALID_ANALYTICS_CONTEXT = 'invalid-analytics-context',
   INDEXEDDB_UNAVAILABLE = 'indexeddb-unavailable',
   FETCH_THROTTLE = 'fetch-throttle',
   CONFIG_FETCH_FAILED = 'config-fetch-failed',
   NO_API_KEY = 'no-api-key',
   NO_APP_ID = 'no-app-id'
 }
 
 const ERRORS: ErrorMap<AnalyticsError> = {
   [AnalyticsError.ALREADY_EXISTS]:
     'A Firebase Analytics instance with the appId {$id} ' +
     ' already exists. ' +
     'Only one Firebase Analytics instance can be created for each appId.',
   [AnalyticsError.ALREADY_INITIALIZED]:
     'Firebase Analytics has already been initialized.' +
     'settings() must be called before initializing any Analytics instance' +
     'or it will have no effect.',
   [AnalyticsError.INTEROP_COMPONENT_REG_FAILED]:
     'Firebase Analytics Interop Component failed to instantiate: {$reason}',
   [AnalyticsError.INVALID_ANALYTICS_CONTEXT]:
     'Firebase Analytics is not supported in this environment. ' +
     'Wrap initialization of analytics in analytics.isSupported() ' +
     'to prevent initialization in unsupported environments. Details: {$errorInfo}',
   [AnalyticsError.INDEXEDDB_UNAVAILABLE]:
     'IndexedDB unavailable or restricted in this environment. ' +
     'Wrap initialization of analytics in analytics.isSupported() ' +
     'to prevent initialization in unsupported environments. Details: {$errorInfo}',
   [AnalyticsError.FETCH_THROTTLE]:
     'The config fetch request timed out while in an exponential backoff state.' +
     ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
   [AnalyticsError.CONFIG_FETCH_FAILED]:
     'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}',
   [AnalyticsError.NO_API_KEY]:
     'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field to' +
     'contain a valid API key.',
   [AnalyticsError.NO_APP_ID]:
     'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field to' +
     'contain a valid app ID.'
 };
 
 interface ErrorParams {
   [AnalyticsError.ALREADY_EXISTS]: { id: string };
   [AnalyticsError.INTEROP_COMPONENT_REG_FAILED]: { reason: Error };
   [AnalyticsError.FETCH_THROTTLE]: { throttleEndTimeMillis: number };
   [AnalyticsError.CONFIG_FETCH_FAILED]: {
     httpStatus: number;
     responseMessage: string;
   };
   [AnalyticsError.INVALID_ANALYTICS_CONTEXT]: { errorInfo: string };
   [AnalyticsError.INDEXEDDB_UNAVAILABLE]: { errorInfo: string };
 }
 
 export const ERROR_FACTORY = new ErrorFactory<AnalyticsError, ErrorParams>(
   'analytics',
   'Analytics',
   ERRORS
 );
 