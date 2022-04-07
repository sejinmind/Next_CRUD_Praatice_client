import * as React from "react";
import { Layout, Breadcrumb } from "antd";
import AppSider from "components/AppSider";
import AppHeader from "components/AppHeader";
const { Header, Content, Footer } = Layout;
export default class AppLayout extends React.Component {
  state = {
    collapsed: false,
  };

  constructor(props) {
    super(props);
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <AppSider />
        <Layout className="site-layout">
          <AppHeader />
          <Content style={{ margin: "0 16px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
