import * as React from 'react'
import { BoardListView } from '../view'

export class BoardListViewController extends React.Component {
	constructor(props) {
		super(props)
	}

	deleteArticle = (_id) => {
		console.log(_id)
		this.props.viewModel.deleteArticle(_id)
	}

	render() {
		const { deleteArticle } = this
		const data = this.props.viewModel.getBoardList()

		return <BoardListView data={data} deleteArticle={deleteArticle} />
	}
}
