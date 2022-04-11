import * as React from 'react'
import { BoardDetailPage } from 'modules/Board/pages'

export default class BoardShow extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <BoardDetailPage client={this.props.client} />
	}
}
