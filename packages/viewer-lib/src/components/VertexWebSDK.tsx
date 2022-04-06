import React from 'react';

import { useSDK, UseSDKOptions } from '../lib/sdk';

interface Props {
  readonly fallback?: React.ReactNode | React.ReactNode[];
  readonly children?: React.ReactNode | React.ReactNode[];

  readonly withPolyfills?: UseSDKOptions['withPolyfills'];
  readonly withDefineCustomElements?: UseSDKOptions['withDefineCustomElements'];
}

/**
 * A root level React component that should wrap Web SDK components. This
 * component will asynchronously apply any polyfills needed by the Web SDK and
 * register its custom elements with the browser.
 *
 * You can pass a `fallback` component to render while the polyfills and
 * components are loading.
 *
 * @example
 *
 * import React from 'react';
 * import { VertexWebSDK } from 'viewer-lib';
 *
 * export function MyApp(): JSX.Element {
 *   return (
 *     <VertexWebSDK fallback={<div>Loading...</div>}>
 *       <Viewer>
 *         <ViewerViewCube />
 *         <ViewerDefaultToolbar />
 *       </Viewer>
 *     </VertexWebSDK>
 *   );
 * }
 */
export function VertexWebSDK({
  children,
  fallback,
  ...props
}: Props): JSX.Element {
  const { ready } = useSDK(props);

  if (ready) {
    return <>{children}</>;
  } else {
    return <>{fallback}</>;
  }
}
