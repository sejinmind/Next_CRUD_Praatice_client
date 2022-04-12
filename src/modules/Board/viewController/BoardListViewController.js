import * as React from 'react'
import { BoardListView } from '../views'
import { AuthContext } from 'context'
export class BoardListViewController extends React.Component {
	static contextType = AuthContext
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

		return <BoardListView auth={this.context.user} data={data} deleteArticle={deleteArticle} />
	}
}
