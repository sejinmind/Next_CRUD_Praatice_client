import * as React from "react";
// import { BoardActionViewModel } from "../viewmodel";
import { BoardCreateView } from "../view";
export default class BoardCreateViewController extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <BoardCreateView />;
  }
}
