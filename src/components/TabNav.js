import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AppRouter from "./AppRouter.js";
	

 const panes = [
  { menuItem: (
    <Menu.Item key='student'>
      <NavLink to="/students">
      <Icon name='users' />
        Students
      </NavLink>
    </Menu.Item>
  ),
  render: () => <Tab.Pane><AppRouter /></Tab.Pane>
}, 

  { menuItem: (
    <Menu.Item key='messages'>
      <NavLink to="/messages">
      <Icon name='envelope' />
        Messages
      </NavLink>
    </Menu.Item>
  ),
render: () => <Tab.Pane><AppRouter /></Tab.Pane>
}
];

export default function TabNav() {
  return <Tab panes={panes} />;
}
