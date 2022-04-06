import { useEffect, useState } from 'react';

export interface UseSDKOptions {
  readonly withPolyfills?: boolean;
  readonly withDefineCustomElements?: boolean | (() => Promise<void> | void);
}

interface UseSDK {
  readonly ready: boolean;
}

/**
 * A hook that is used to initialize the SDK. By default it will asynchronously
 * apply polyfills needed by the Web SDK and register all of the SDK's custom
 * elements. Returns a flag that signals when the SDK is ready to be rendered.
 *
 * Pass a function to `withDefineCustomElements` to customize which elements are
 * defined. This function should use
 * `window.customElements.define(componentName, componentImpl)` to register
 * elements.
 */
export function useSDK({
  withPolyfills = true,
  withDefineCustomElements = true,
}: UseSDKOptions = {}): UseSDK {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function setup(): Promise<void> {
      if (withPolyfills || withDefineCustomElements) {
        // Use a dynamic import so NextJS does not attempt to render this
        // component with SSR, and to force bundlers to create a separate bundle
        // for the SDK.
        const module = await import('@vertexvis/viewer/loader');

        if (withPolyfills) {
          await module.applyPolyfills();
        }

        if (withDefineCustomElements) {
          if (typeof withDefineCustomElements === 'function') {
            await withDefineCustomElements();
          } else {
            await module.defineCustomElements();
          }
        }
      }

      setReady(true);
    }
    setup();
  }, []);

  return { ready };
}
