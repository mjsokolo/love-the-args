import { React } from 'react';
import Draggable from 'react-draggable';
import './css/Graph.css';
import Nodes from './Nodes';
import SequentialPath from './SequentialPath';
import NodeConnections from './Connections';

export default function Graph() {
  return (
    <Draggable handle=".drag-bar">
      <div className="graph">
        <div className="drag-bar" />
        <div className="canvas">
          <Nodes />
        </div>
        <SequentialPath />
        <NodeConnections />
      </div>
    </Draggable>
  );
}
