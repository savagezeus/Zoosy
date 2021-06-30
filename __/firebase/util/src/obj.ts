export function contains<T extends object>(obj: T, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  
  export function safeGet<T extends object, K extends keyof T>(
    obj: T,
    key: K
  ): T[K] | undefined {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return obj[key];
    } else {
      return undefined;
    }
  }
  
  export function isEmpty(obj: object): obj is {} {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  }
  
  export function map<K extends string, V, U>(
    obj: { [key in K]: V },
    fn: (value: V, key: K, obj: { [key in K]: V }) => U,
    contextObj?: unknown
  ): { [key in K]: U } {
    const res: Partial<{ [key in K]: U }> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        res[key] = fn.call(contextObj, obj[key], key, obj);
      }
    }
    return res as { [key in K]: U };
  }
  