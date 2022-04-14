import * as React from 'react'
import BoardDetailPage from 'modules/Board/pages/BoardDetailPage'
import { RouterContext } from 'context'
export default class BoardShow extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		// return <React.Fragment client={this.props.client} />
		return <BoardDetailPage client={this.props.client} />
	}
}
