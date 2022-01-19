import { useSelector } from 'react-redux';
import React from 'react';
import SingleNode from './SingleNode';
import GroupNode from './GroupNode';
import { createNodesMapping } from './helpers';
import './css/Nodes.css';

export default function Nodes() {
  const order = useSelector((state) => state.blocks.present.order);
  const groups = useSelector((state) => state.blocks.present.groups);
  const nodesMap = createNodesMapping(order, groups);
  const nodes = nodesMap.map((element) => {
    // Render SingleNode
    if (typeof element === 'string') {
      return <SingleNode id={element} key={element} groupPosition={[0, 0]} />;
    }
    // Render GroupNode if element is an array
    return (
      <GroupNode
        id={element.toString()}
        group={element}
        key={element.toString()}
      />
    );
  });
  return nodes;
}
