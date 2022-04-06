import {
  VertexViewerToolbar,
  VertexViewerViewCube,
} from '@vertexvis/viewer-react';
import React from 'react';

/**
 * A component that wraps the Web SDK's `<VertexViewerViewCube>` in a toolbar
 * placed in the top-right of the viewer's viewport.
 */
export function ViewerViewCube(): JSX.Element {
  return (
    <VertexViewerToolbar placement="top-right">
      <VertexViewerViewCube />
    </VertexViewerToolbar>
  );
}
