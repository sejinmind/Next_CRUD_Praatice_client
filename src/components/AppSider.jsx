import * as React from "react";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
export default class AppSider extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout.Sider
        collapsible
        collapsed={this.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link href={"/"}>메인화면</Link>
          </Menu.Item>
          <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="유저">
            <Menu.Item key="2">로그인</Menu.Item>
            <Menu.Item key="3">회원가입</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" icon={<TeamOutlined />} title="게시판">
            <Menu.Item key="4">
              <Link href={"/board"}>리스트</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link href={"/board/create"}>작성</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Sider>
    );
  }
}
