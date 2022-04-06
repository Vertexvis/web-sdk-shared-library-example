import '@vertexvis/viewer/dist/viewer/viewer.css';
import '../styles/global.css';

import React from 'react';

export default function App({ Component, pageProps }): JSX.Element {
  return <Component {...pageProps} />;
}
