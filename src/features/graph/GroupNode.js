import { useSelector, useDispatch } from 'react-redux';
import { ContextMenuTrigger } from 'react-contextmenu';
import React from 'react';
import Draggable from 'react-draggable';
import { NodeMenuId, MODES } from './GraphContextMenu';
import './css/Nodes.css';
import SingleNode from './SingleNode';
import { element } from 'prop-types';

export default function GroupNode(props) {
  const { id, group } = props;
  const dispatch = useDispatch();

  // get dimensions of group
  const positions = useSelector((state) => state.blocks.present.positions);
  const posMaxX = Math.max(...group.map((node) => positions[node][0]));
  const posMinX = Math.min(...group.map((node) => positions[node][0]));
  const posMaxY = Math.max(...group.map((node) => positions[node][1]));
  const posMinY = Math.min(...group.map((node) => positions[node][1]));
  const xOffset = 200; //document.getElementsByClassName('node')[0].computedStyleMap();
  const yOffset = 100; // document.getElementsByClassName('node')[0].computedStyleMap();
  console.log(xOffset, yOffset);

  // const position = useSelector(
  //   (state) => state.blocks.present.positions[group[0]]
  // );
  const label = useSelector(
    (state) => state.blocks.present.graph.boxes[group[0]]
  );
  const selectedNode = useSelector(
    (state) => state.blocks.present.graph.selectedNode
  );
  let style = {};
  if (selectedNode === id) {
    style = { borderColor: 'gold', backgroundColor: 'gold' };
  }

  // determines style for border of node
  let border = '';
  if (label) {
    border = MODES[label].color;
    style.borderColor = border;
  } else {
    border = '';
  }

  // Lets add some test stylings
  style['backgroundColor'] = 'blue';

  // group-style
  const groupStyle = {};
  groupStyle.height = posMaxY - posMinY + yOffset;
  groupStyle.width = posMaxX - posMinX + xOffset;

  const handleDrag = (e, d) => {
    dispatch({
      type: 'updatePosition',
      payload: {
        id,
        x: d.lastX + d.deltaX,
        y: d.lastY + d.deltaY,
      },
    });
  };
  const [x, y] = [posMinX, posMinY];
  console.log(x, y);
  const insideNodes = group.map((i) => (
    <SingleNode id={i} key={i} groupPosition={[x, y]} />
  ));
  return (
    <ContextMenuTrigger id={NodeMenuId} key={id} holdToDisplay={-1}>
      <Draggable
        onStop={handleDrag}
        onDrag={handleDrag}
        key={id}
        defaultPosition={{ x, y }}
        // position={{ x, y }}
        bounds={{ left: 0, top: 0 }}
        handle=".group-drag-bar"
      >
        <div className="group" style={groupStyle}>
          <div className="group-drag-bar" />
          {/* <fieldset className="group-node" id={id} style={style}>
            <legend className="label" style={{ color: border }}>
              {label}
            </legend> */}
          <div className="group-canvas">{insideNodes}</div>
          {/* </fieldset> */}
        </div>
      </Draggable>
    </ContextMenuTrigger>
  );
}
