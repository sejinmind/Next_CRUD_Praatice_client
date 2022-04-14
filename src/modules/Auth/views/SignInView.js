import * as React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
export const SignInView = ({ onFinish, handleSignIn, state, setState }) => {
	return (
		<Form
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 8,
			}}
			onFinish={onFinish}
			autoComplete="off">
			<Form.Item label="Username" required>
				<Input
					name="Username"
					type={'email'}
					rules={[
						{
							required: true,
							message: 'Please input your Username!',
						},
					]}
					onChange={(e) =>
						setState({ username: e.target.value, password: state.password })
					}
				/>
			</Form.Item>
			<Form.Item label="Password" required>
				<Input
					name="Password"
					type={'password'}
					rules={[
						{
							required: true,
							message: 'Please input your Password!',
						},
					]}
					onChange={(e) =>
						setState({ username: state.username, password: e.target.value })
					}
				/>
			</Form.Item>
			<Form.Item
				name="remember"
				valuePropName="checked"
				wrapperCol={{
					offset: 8,
					span: 16,
				}}>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>
			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 8,
				}}>
				<Button type="primary" block onClick={handleSignIn}>
					로그인
				</Button>
			</Form.Item>
		</Form>
	)
}
