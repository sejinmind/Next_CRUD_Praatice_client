import * as React from "react";
import { Layout, PageHeader, Input } from "antd";
import { Routes } from "constant/Routes";
import { RouterContext } from "context/Router";
export default class AppHeader extends React.Component {
  static contextType = RouterContext;
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
    };
  }

  setPageHeader() {
    const { pathname } = this.context;
    Routes.map((Route) => {
      if (Route.pathname === pathname) {
        const { title, description } = Route;
        this.setState({ title, description });
      }
    });
  }

  componentDidMount() {
    this.setPageHeader();
  }
  render() {
    return (
      <Layout.Header
        className="site-layout-background"
        style={{
          padding: 0,
          background: "#fff",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <PageHeader
          className="site-page-header"
          onBack={() => this.context.back()}
          title={this.title}
          subTitle={this.description}
        />
        {/* <Input /> */}
      </Layout.Header>
    );
  }
}
