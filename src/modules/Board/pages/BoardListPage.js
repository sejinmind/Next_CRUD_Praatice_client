import * as React from 'react'
import { BoardListViewController } from 'modules/Board/viewController'
import RootStore from '../store'
import { BoardListViewModel } from '../viewmodel'
import { BoardListModel } from '../models'

import { inject } from 'mobx-react'

@inject(RootStore.type.BOARD_MODEL)
export class BoardListPage extends React.Component {
	constructor(props) {
		super(props)
		this.viewModel = new BoardListViewModel(
			new BoardListModel(this.props.client),
			this.props.client,
		)
	}

	render() {
		return <BoardListViewController viewModel={this.viewModel} />
	}
}
