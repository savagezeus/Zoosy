import { ErrorFactory, ErrorMap } from '@firebase/util';

export const enum AppError {
  NO_APP = 'no-app',
  BAD_APP_NAME = 'bad-app-name',
  DUPLICATE_APP = 'duplicate-app',
  APP_DELETED = 'app-deleted',
  INVALID_APP_ARGUMENT = 'invalid-app-argument',
  INVALID_LOG_ARGUMENT = 'invalid-log-argument'
}

const ERRORS: ErrorMap<AppError> = {
  [AppError.NO_APP]:
    "No Firebase App '{$appName}' has been created - " +
    'call Firebase App.initializeApp()',
  [AppError.BAD_APP_NAME]: "Illegal App name: '{$appName}",
  [AppError.DUPLICATE_APP]: "Firebase App named '{$appName}' already exists",
  [AppError.APP_DELETED]: "Firebase App named '{$appName}' already deleted",
  [AppError.INVALID_APP_ARGUMENT]:
    'firebase.{$appName}() takes either no argument or a ' +
    'Firebase App instance.',
  [AppError.INVALID_LOG_ARGUMENT]:
    'First argument to `onLog` must be null or a function.'
};

type ErrorParams = { [key in AppError]: { appName: string } };

export const ERROR_FACTORY = new ErrorFactory<AppError, ErrorParams>(
  'app',
  'Firebase',
  ERRORS
);
