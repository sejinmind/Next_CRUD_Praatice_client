import * as React from 'react'
import { message } from 'antd'
import { BoardCreateView } from '../views'
import { RouterContext, AuthContext } from 'context'
import { observer } from 'mobx-react-lite'
const BoardCreateViewController = observer(({ viewModel }) => {
	const authContext = React.useContext(AuthContext)
	const routerContext = React.useContext(RouterContext)
	const [isNew, setIsNew] = React.useState(true)
	const [state, setState] = React.useState({
		author: '',
		title: '',
		created_at: '',
	})

	React.useEffect(async () => {
		// 수정하러 들어오면 slug 가있음
		if (routerContext.query.slug) {
			setIsNew(false)
			const _id = routerContext.query.slug
			if (typeof _id !== 'undefined') {
				const result = await viewModel.getBoardDetail(_id)
				setState({
					author: result?.author,
					title: result?.title,
					created_at: result?.created_at,
				})
			}
		} else {
			setIsNew(true)
			if (authContext.user && authContext.user.username) {
				setState({
					author: authContext.user.username,
					title: state.title,
					created_at: state.created_at,
				})
			}
		}
	}, [authContext.user, isNew, routerContext.query.slug])

	const onFinish = () => {
		if (isNew) {
			viewModel.addArticle(state)
			message.success('글 작성이 완료되었습니다!')
		} else {
			viewModel.updateArticle(routerContext.query.slug, state)
			message.success('글 수정이 완료되었습니다!')
		}
	}
	const onFinishFailed = () => {
		message.error('Submit failed!')
	}
	const onTitleChange = (e) => {
		const title = e.target.value
		if (title !== '') {
			setState({ author: state.author, title, created_at: state.created_at })
		}
	}

	return (
		<BoardCreateView
			isNew={isNew}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			onTitleChange={onTitleChange}
			isLoggedIn={authContext.isLoggedIn}
			router={routerContext}
			state={state}
		/>
	)
})

export default BoardCreateViewController
