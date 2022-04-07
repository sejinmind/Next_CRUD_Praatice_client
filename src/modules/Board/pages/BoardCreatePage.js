import * as React from "react";
import BoardCreateViewController from "../viewController/BoardCreateViewController";
export class BoardCreatePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <BoardCreateViewController />;
  }
}
