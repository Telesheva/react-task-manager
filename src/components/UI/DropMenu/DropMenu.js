import React from 'react';
import './DropMenu.css';
import { Menu, Dropdown } from 'antd';

const DropMenu = props => {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="">Edit task</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="">Delete task</a>
            </Menu.Item>
        </Menu>
    );
  return (
      <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
              <img src={more} alt="more"/>
          </a>
      </Dropdown>
  )
};

export default DropMenu;