/** Returns a promise that resolves after given time passes. */
export function sleep(ms: number): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(resolve, ms);
    });
  }
  