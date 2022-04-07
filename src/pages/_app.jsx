import * as React from "react";
import { RouterProvider } from "context/Router";
import "styles/reset.css";
import "antd/dist/antd.min.css";
import AppLayout from "components/AppLayout";
export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <RouterProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </RouterProvider>
    );
  }
}
