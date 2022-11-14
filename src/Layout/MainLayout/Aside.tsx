import React, { useState } from 'react';
import * as S from '../../styles/MainStyle';
import {
  DashboardOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BankOutlined,
} from '@ant-design/icons';

import 'antd/dist/antd.css';
import { Button, Menu } from 'antd';

const Aside: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <S.MainSideLayout>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="one" icon={<DashboardOutlined />}>
          대쉬보드
        </Menu.Item>
        <Menu.SubMenu icon={<BankOutlined />} title="계좌 목록" key="SubMenu">
          <Menu.Item key="two">
            <a href="/main"></a> 투자 계좌
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="three" icon={<UserOutlined />}>
          <a href="/user">사용자</a>
        </Menu.Item>
      </Menu>
    </S.MainSideLayout>
  );
};

export default Aside;
