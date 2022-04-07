import * as React from "react";
import { RouterProvider } from "context/Router";
import "styles/reset.css";
export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <RouterProvider>
        <Component {...pageProps} />
      </RouterProvider>
    );
  }
}
