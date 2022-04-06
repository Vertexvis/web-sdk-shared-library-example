import React from 'react';
import {
  VertexWebSDK,
  Viewer,
  ViewerDefaultToolbar,
  ViewerViewCube,
} from 'viewer-lib';

const RENDERING_HOST: string | undefined = undefined;
const STREAM_KEY = '';

export default function HomePage(): JSX.Element {
  return (
    <main className="w-screen h-screen flex flex-col">
      <h2 className="text-2xl font-bold">
        Shared Viewer Library in NextJS App Demo
      </h2>
      <VertexWebSDK fallback={<div>Loading...</div>}>
        <Viewer
          className="w-full h-full"
          configRenderingHost={RENDERING_HOST}
          src={`urn:vertexvis:stream-key:${STREAM_KEY}`}
        >
          <ViewerViewCube />
          <ViewerDefaultToolbar />
        </Viewer>
      </VertexWebSDK>
    </main>
  );
}
