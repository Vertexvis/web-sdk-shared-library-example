import { VertexViewerDefaultToolbar } from '@vertexvis/viewer-react';
import React from 'react';

/**
 * A component that wraps the Web SDK's `<VertexViewerDefaultToolbar>`. Toolbar
 * is placed in the bottom-left of the viewer's viewport.
 */
export function ViewerDefaultToolbar(): JSX.Element {
  return <VertexViewerDefaultToolbar placement="bottom-left" />;
}
