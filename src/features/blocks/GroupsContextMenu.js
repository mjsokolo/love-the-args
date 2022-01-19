import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import { useDispatch } from 'react-redux';
import '../../ContextMenu.css';

export const GROUP_MENU_ID = 'group-menu';

function extractIds() {
  let ids = [];
  const selected = document.getElementsByClassName('selected');
  const start = selected[0].id;
  const end = selected[selected.length - 1].id;

  return { start, end };
}

export default function GroupContextMenu() {
  const dispatch = useDispatch();

  const group = (event, data, element) => {
    const { start, end } = extractIds();
    const { target, dispatch } = data;
    dispatch({ type: 'groupIds', payload: { start, end } });
    console.log(start, end);
  };

  // const ungroup = (event, data, element) => {
  //   const ids = extractIds();
  //   const { target, dispatch } = data;
  //   dispatch({ type: 'ungroupIds', payload: { ids } });
  // };

  return (
    <ContextMenu id={GROUP_MENU_ID} className="context-menu" hideOnLeave>
      <MenuItem onClick={group} data={{ dispatch }} key={'group'}>
        {'Group'}
      </MenuItem>
      {/* <MenuItem onClick={ungroup} data={{ dispatch }} key={'ungroup'}>
        {'UnGroup'}
      </MenuItem> */}
    </ContextMenu>
  );
}
