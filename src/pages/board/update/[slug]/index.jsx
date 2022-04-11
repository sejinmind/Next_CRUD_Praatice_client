import * as React from 'react'
import { BoardCreatePage } from 'modules/Board/pages'

export default class BoardUpdate extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <BoardCreatePage client={this.props.client} />
	}
}
