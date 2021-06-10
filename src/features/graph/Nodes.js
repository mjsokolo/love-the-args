import { useSelector, useDispatch } from 'react-redux';
import { ContextMenuTrigger } from 'react-contextmenu';
import React from 'react';
import Draggable from 'react-draggable';
import { contextMenuId } from './GraphContextMenu';
import './css/Nodes.css';

const Node = (id, position, txt, dispatch) => {
  const handleDrag = (e, d) => {
    dispatch({
      type: 'updatePosition',
      payload: {
        id: e.srcElement.id,
        x: d.lastX + d.deltaX,
        y: d.lastY + d.deltaY,
      },
    });
  };
  const [x, y] = position;
  return (
    <ContextMenuTrigger id={contextMenuId}>
      <Draggable
        onStop={handleDrag}
        onDrag={handleDrag}
        key={id}
        defaultPosition={{ x, y }}
      >
        <div className="node" id={id}>
          {txt}
        </div>
      </Draggable>
    </ContextMenuTrigger>
  );
};

export default function Nodes() {
  const dispatch = useDispatch();
  const positions = useSelector((state) => state.blocks.present.positions);
  const order = useSelector((state) => state.blocks.present.order);
  const txts = useSelector((state) => state.blocks.present.txts);

  const nodes = order.map((id) => Node(id, positions[id], txts[id], dispatch));
  return nodes;
}