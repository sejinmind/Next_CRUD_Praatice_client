import * as React from 'react'
import BoardCreateViewController from '../viewController/BoardCreateViewController'
import RootStore from '../store'
import { BoardListViewModel } from '../viewmodel'
import { BoardListModel } from '../models'
export class BoardCreatePage extends React.Component {
	constructor(props) {
		super(props)
		this.viewModel = new BoardListViewModel(new BoardListModel(), this.props.client)
	}
	render() {
		return <BoardCreateViewController viewModel={this.viewModel} />
	}
}
