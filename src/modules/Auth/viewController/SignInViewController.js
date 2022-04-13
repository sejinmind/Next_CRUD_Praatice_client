import * as React from 'react'
import { SignInView } from '../views'
import { useRouter } from 'next/router'
import { message } from 'antd'
export const SignInViewController = ({ viewModel }) => {
	const router = useRouter()
	const [state, setState] = React.useState({
		username: '',
		password: '',
	})
	const onFinish = () => {
		handleSignIn()
	}

	const handleSignIn = async () => {
		const { username, password } = state
		const response = await viewModel.handleSignIn(username, password)
		if (response === 'ok') {
			router.back()
			message.success('로그인 성공!', 2.5)
		}
	}
	return (
		<SignInView
			onFinish={onFinish}
			handleSignIn={handleSignIn}
			state={state}
			setState={setState}
		/>
	)
}
