export class Deferred<R> {
    promise: Promise<R>;
    reject: (value?: unknown) => void = () => {};
    resolve: (value?: unknown) => void = () => {};
    constructor() {
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve as (value?: unknown) => void;
        this.reject = reject as (value?: unknown) => void;
      });
    }
  
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    wrapCallback(
      callback?: (error?: unknown, value?: unknown) => void
    ): (error: unknown, value?: unknown) => void {
      return (error, value?) => {
        if (error) {
          this.reject(error);
        } else {
          this.resolve(value);
        }
        if (typeof callback === 'function') {
          // Attaching noop handler just in case developer wasn't expecting
          // promises
          this.promise.catch(() => {});
  
          // Some of our callbacks don't expect a value and our own tests
          // assert that the parameter length is 1
          if (callback.length === 1) {
            callback(error);
          } else {
            callback(error, value);
          }
        }
      };
    }
  }
  