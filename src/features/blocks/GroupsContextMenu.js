import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import { useDispatch } from 'react-redux';
import '../../ContextMenu.css';

export const GROUP_MENU_ID = 'group-menu';

// to dos:
// send update data structure of grouping

export default function GroupContextMenu() {
  const sendGroupMessage = (event, data, element) => {
    // ids of the elements that are selected:
    const a = document.getElementsByClassName('selected');
    console.log(a);
    // const { target, dispatch } = data;
    // const { id } = element.firstChild;
    // dispatch({ type: 'sendGroupMessage', payload: { id } });
  };
  const dispatch = useDispatch();

  return (
    <ContextMenu id={GROUP_MENU_ID} className="context-menu" hideOnLeave>
      <MenuItem onClick={sendGroupMessage} data={{ dispatch }} key={'group'}>
        {'Group'}
      </MenuItem>
      <MenuItem onClick={sendGroupMessage} data={{ dispatch }} key={'ungroup'}>
        {'UnGroup'}
      </MenuItem>
    </ContextMenu>
  );
}
