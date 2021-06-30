export function deepExtend(target: unknown, source: unknown): unknown {
    if (!(source instanceof Object)) {
      return source;
    }
  
    switch (source.constructor) {
      case Date:
        // Treat Dates like scalars; if the target date object had any child
        // properties - they will be lost!
        const dateValue = source as Date;
        return new Date(dateValue.getTime());
  
      case Object:
        if (target === undefined) {
          target = {};
        }
        break;
      case Array:
        // Always copy the array source and overwrite the target.
        target = [];
        break;
  
      default:
        // Not a plain Object - treat it as a scalar.
        return source;
    }
  
    for (const prop in source) {
      if (!source.hasOwnProperty(prop)) {
        continue;
      }
      (target as { [key: string]: unknown })[prop] = deepExtend(
        (target as { [key: string]: unknown })[prop],
        (source as { [key: string]: unknown })[prop]
      );
    }
  
    return target;
  }
  