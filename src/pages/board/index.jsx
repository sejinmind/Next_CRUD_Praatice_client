import * as React from 'react'

import { BoardListPage } from 'modules/Board/pages'

export default class BoardList extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return <BoardListPage client={this.props.client} />
	}
}
