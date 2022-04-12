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
	const onFinish = (values) => {
		console.log('Success:', values)
	}

	const handleSignIn = async () => {
		const { username, password } = state
		const response = await viewModel.handleSignIn(username, password)
		if (response === 'ok') {
			message.success('로그인 성공!', 2.5)
			router.back()
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
