import * as React from 'react'
import { message } from 'antd'
// import { BoardActionViewModel } from "../viewmodel";
import { BoardCreateView } from '../views'
import { RouterContext, AuthContext } from 'context'
import { toJS } from 'mobx'
export default function BoardCreateViewController(props) {
	const authContext = React.useContext(AuthContext)
	const routerContext = React.useContext(RouterContext)
	const [state, setState] = React.useState({
		author: '',
		title: '',
	})
	React.useEffect(() => {
		if (authContext.user && authContext.user.username) {
			setState({ author: authContext.user.username, title: state.title })
		}
	}, [authContext.user])
	const onFinish = (values) => {
		props.viewModel.addArticle(state)
		message.success('글 작성이 완료되었습니다!')
	}
	const onFinishFailed = () => {
		message.error('Submit failed!')
	}
	const onTitleChange = (e) => {
		const title = e.target.value
		if (title !== '') {
			setState({ author: state.author, title })
		}
	}

	const getBoardDetail = (_id) => {
		return props.viewModel.getBoardDetail(_id)
	}
	React.useEffect(() => {
		const _id = routerContext.query.slug
		if (typeof _id !== 'undefined') {
			const result = getBoardDetail(_id)
		}
	}, [routerContext.query.slug])

	return (
		<BoardCreateView
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			onTitleChange={onTitleChange}
			isLoggedIn={authContext.isLoggedIn}
			router={routerContext}
			author={state.author}
			title={state.title}
		/>
	)
}

// export default class BoardCreateViewController extends React.Component {
// 	static contextType = RouterContext
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			author: '',
// 			title: '',
// 		}
// 	}

// 	onFinish = (values) => {
// 		this.props.viewModel.addArticle(this.state)
// 		message.success('글 작성이 완료되었습니다!')
// 	}
// 	onFinishFailed = () => {
// 		message.error('Submit failed!')
// 	}
// 	onAuthorChange = (e) => {
// 		const author = e.target.value
// 		if (author !== '') {
// 			this.setState({ author })
// 		}
// 	}
// 	onTitleChange = (e) => {
// 		const title = e.target.value
// 		if (title !== '') {
// 			this.setState({ title })
// 		}
// 	}

// 	getBoardDetail(_id) {
// 		return this.props.viewModel.getBoardDetail(_id)
// 	}
// 	render() {
// 		const { onFinish, onFinishFailed, onAuthorChange, onTitleChange } = this
// 		const _id = this.context.query.slug
// 		if (typeof _id !== 'undefined') {
// 			const result = this.getBoardDetail(_id)
// 			console.log(result)
// 		}
// 		return (
// 			<BoardCreateView
// 				onFinish={onFinish}
// 				onFinishFailed={onFinishFailed}
// 				onTitleChange={onTitleChange}
// 				onAuthorChange={onAuthorChange}
// 				title={this.state.title}
// 			/>
// 		)
// 	}
// }
