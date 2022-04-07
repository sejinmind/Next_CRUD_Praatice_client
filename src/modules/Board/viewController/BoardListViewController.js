import * as React from "react";
import { BoardListView } from "../view";
import { BoardListViewModel } from "../viewmodel";
export class BoardListViewController extends React.Component {
  constructor(props) {
    super(props);
    this.viewModel = BoardListViewModel;
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const data = [
      {
        key: "1",
        name: "박준형",
        title: "New York No. 1 Lake Park",
        createdAt: "2022.04.07",
      },
      {
        key: "2",
        name: "박준형",
        title: "London No. 1 Lake Park",
        createdAt: "2022.04.07",
      },
      {
        key: "3",
        name: "Joe Black",
        title: "Sidney No. 1 Lake Park",
        createdAt: "2022.04.07",
      },
    ];
    this.setState({ data });
  }
  render() {
    return <BoardListView viewModel={this.viewModel} data={this.state.data} />; //
  }
}
