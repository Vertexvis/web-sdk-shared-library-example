import type { Environment } from '@vertexvis/viewer';
import { VertexViewer } from '@vertexvis/viewer-react';
import React from 'react';

interface Props {
  readonly children?: React.ReactNode | React.ReactNode[];
  readonly className?: string;
  readonly configEnv?: Environment;
  readonly configRenderingHost?: string;
  readonly src: string;
}

/**
 * A component that wraps the Web SDK's `<VertexViewer>` component. This is
 * simply a pass through component, but could be extended to include default
 * customizations that you want to share between your applications.
 */
export function Viewer({
  children,
  className,
  configEnv,
  configRenderingHost,
  src,
}: Props): JSX.Element {
  const configJson: string | undefined =
    configRenderingHost != null
      ? JSON.stringify({ network: { renderingHost: configRenderingHost } })
      : undefined;

  return (
    <VertexViewer
      className={className}
      configEnv={configEnv}
      config={configJson}
      src={src}
    >
      {children}
    </VertexViewer>
  );
}
