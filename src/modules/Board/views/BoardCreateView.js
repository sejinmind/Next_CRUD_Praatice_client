import * as React from 'react'
import { Input, Form, Button, Typography } from 'antd'
export const BoardCreateView = (props) => {
	const [fields, setFields] = React.useState([])

	const [form] = Form.useForm()

	const { onFinish, onFinishFailed, onTitleChange, isLoggedIn, state, router, isNew } = props
	return (
		<React.Fragment>
			{isLoggedIn ? (
				<Form
					name="boardCreateForm"
					size="large"
					fields={fields}
					onFieldsChange={(_, allFields) => {
						setFields(allFields)
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					form={form}>
					<Form.Item label="작성자">
						<Typography.Text keyboard>{state.author}</Typography.Text>
					</Form.Item>
					{isNew ? null : (
						<Form.Item label="작성일자">
							<Typography.Text mark>{state.created_at}</Typography.Text>
						</Form.Item>
					)}
					<Form.Item required label={<React.Fragment>내용</React.Fragment>}>
						<Input
							showCount
							maxLength={100}
							onChange={onTitleChange}
							style={{ minHeight: 100 }}
							rules={[{ required: true }]}
							value={isNew ? null : state.title}
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" block onClick={onFinish}>
							{isNew ? '작성' : '수정'}
						</Button>
					</Form.Item>
				</Form>
			) : (
				<Button block onClick={() => router.push('/signIn')}>
					로그인하러가기
				</Button>
			)}
		</React.Fragment>
	)
}
