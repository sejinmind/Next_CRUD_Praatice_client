import * as React from 'react'
import { BoardDetailViewController } from 'modules/Board/viewController'
import RootStore from '../store'
import { BoardListViewModel } from '../viewmodel'
import { BoardListModel } from '../models'
// @inject(RootStore.type.TODO_MODEL)
export default class BoardListPage extends React.Component {
	constructor(props) {
		super(props)
		// console.log(props)
		const boardModel = props[RootStore.type.BOARD_MODEL]
		this.viewModel = new BoardListViewModel(new BoardListModel(), this.props.client)
	}

	render() {
		return <BoardDetailViewController viewModel={this.viewModel} />
	}
}
