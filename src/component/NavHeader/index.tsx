import * as React from 'react';
import { NavLink } from 'umi';
import { Layout } from 'antd';
// import Utils from '../../Utils/utils.js'
import './style.less';

const { Header } = Layout;

interface INavHeaderProps {}

const NavHeader: React.FunctionComponent<INavHeaderProps> = (props) => {
  const username = '橘子';

  return (
    <div className="NavHeader">
      <Header style={{ background: '#ffffff', textAlign: 'right' }}>
        <span style={{ marginRight: 10 }}>欢迎 {username}</span>
        <NavLink to={'/logout'}>退出账户</NavLink>
      </Header>
      <div className="header_bottom">
        <div className="pagetitle">首页</div>
      </div>
    </div>
  );
};

export default NavHeader;
