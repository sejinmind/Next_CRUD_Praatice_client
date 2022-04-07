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
      subTitle: null,
    };
  }

  setPageHeader() {
    const { pathname } = this.context;
    Routes.map((Route) => {
      if (Route.pathname === pathname) {
        const { title, subTitle } = Route;
        this.setState({ title, subTitle });
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
          display: "flex",
          justifyContent: "space-between",
          background: "#fff",
        }}
      >
        <PageHeader
          className="site-page-header"
          onBack={() => this.context.back()}
          title={this.state.title}
          subTitle={this.state.subTitle}
        />
      </Layout.Header>
    );
  }
}
