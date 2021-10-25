import React from 'react';
import Nodes from './Nodes';
import SequentialPath from './SequentialPath';
import GraphContextMenu from './GraphContextMenu';
import ConnectionContextMenu from './ConnectionContextMenu';
import ConnectionListener from './ConnectionListener';
import NodeConnections from './Connections';

export default function Graph() {
  return (
    <>
      {/* <div className="canvas"> */}
      <Nodes />
      <SequentialPath />
      <NodeConnections />
      {/* </div> */}
      <GraphContextMenu />
      <ConnectionContextMenu />
      <ConnectionListener />
    </>
  );
}
