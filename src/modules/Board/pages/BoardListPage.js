import * as React from "react";
import { BoardListViewController } from "modules/Board/viewController";

export class BoardListPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <BoardListViewController />;
  }
}
