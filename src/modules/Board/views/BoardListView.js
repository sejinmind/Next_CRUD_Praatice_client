import * as React from 'react'
import { Table, Space, Popconfirm } from 'antd'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import Link from 'next/link'

import { QuestionCircleOutlined } from '@ant-design/icons'
import Search from 'components/Search'

@observer
export class BoardListView extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: props.data }
	}

	render() {
		const columns = [
			{
				title: '작성자',
				dataIndex: 'author',
				key: 'author',
			},
			{
				title: '제목',
				dataIndex: 'title',
				key: 'title',
				render: (text) => (
					<Link href={`/board/show/[${1}]`} passHref>
						{text}
					</Link>
				),
			},
			{
				title: '작성일',
				dataIndex: 'created_at',
				key: 'created_at',
			},
			{
				title: 'Action',
				key: 'action',
				render: (text, record) => {
					return (
						<Space size="small">
							{text.author === this.props.auth.username ? (
								<React.Fragment>
									<Link href={`board/show/${text._id}`}>수정</Link>
									<Popconfirm
										placement="rightTop"
										title="정말 삭제하시겠습니까？"
										okText="삭제"
										cancelText="취소"
										icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
										onConfirm={() => this.props.deleteArticle(text._id)}>
										<a>삭제</a>
									</Popconfirm>
								</React.Fragment>
							) : null}
						</Space>
					)
				},
			},
		]
		const { data } = this.props
		const setState = this.setState.bind(this)
		return (
			<React.Fragment>
				<Search placeholder="검색해주세요" data={data} setData={setState} />
				<Table columns={columns} dataSource={toJS(this.state.data)} rowKey="_id" />
			</React.Fragment>
		)
	}
}
