import * as React from 'react'
import { Input, Form, Button, message } from 'antd'
export const BoardCreateView = (props) => {
	const [fields, setFields] = React.useState([])

	const [form] = Form.useForm()

	const { onFinish, onFinishFailed, onAuthorChange, onTitleChange, title } = props
	return (
		<React.Fragment>
			<Form
				name="boardCreateForm"
				size="middle"
				fields={fields}
				onFieldsChange={(_, allFields) => {
					setFields(allFields)
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				form={form}>
				<Form.Item required label="작성자">
					<Input
						placeholder="관리자.."
						onChange={onAuthorChange}
						rules={[{ required: true }]}
					/>
				</Form.Item>
				<Form.Item required label={<React.Fragment>내용</React.Fragment>}>
					<Input
						showCount
						maxLength={100}
						onChange={onTitleChange}
						style={{ minHeight: 100 }}
						rules={[{ required: true }]}
					/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" block onClick={onFinish}>
						작성
					</Button>
				</Form.Item>
			</Form>
		</React.Fragment>
	)
}
