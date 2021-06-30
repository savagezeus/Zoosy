export function bufferToBase64UrlSafe(array: Uint8Array): string {
    const b64 = btoa(String.fromCharCode(...array));
    return b64.replace(/\+/g, '-').replace(/\//g, '_');
  }
  