import * as React from 'react'
import { message } from 'antd'
// import { BoardActionViewModel } from "../viewmodel";
import { BoardCreateView } from '../view'
import { RouterContext } from 'context/Router'
export default class BoardCreateViewController extends React.Component {
	static contextType = RouterContext
	constructor(props) {
		super(props)
		this.state = {
			author: '',
			title: '',
		}
	}

	onFinish = (values) => {
		this.props.viewModel.addArticle(this.state)
		message.success('글 작성이 완료되었습니다!')
	}
	onFinishFailed = () => {
		message.error('Submit failed!')
	}
	onAuthorChange = (e) => {
		const author = e.target.value
		if (author !== '') {
			this.setState({ author })
		}
	}
	onTitleChange = (e) => {
		const title = e.target.value
		if (title !== '') {
			this.setState({ title })
		}
	}

	getBoardDetail(_id) {
		return this.props.viewModel.getBoardDetail(_id)
	}
	render() {
		const { onFinish, onFinishFailed, onAuthorChange, onTitleChange } = this
		const _id = this.context.query.slug
		if (typeof _id !== 'undefined') {
			const result = this.getBoardDetail(_id)
			console.log(result)
		}
		return (
			<BoardCreateView
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				onTitleChange={onTitleChange}
				onAuthorChange={onAuthorChange}
				title={this.state.title}
			/>
		)
	}
}
