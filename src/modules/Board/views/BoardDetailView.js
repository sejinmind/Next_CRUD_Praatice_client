import * as React from 'react'
import { Comment, Tooltip, Avatar } from 'antd'
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons'
export const BoardDetailView = ({ data }) => {
	const [likes, setLikes] = React.useState(0)
	const [dislikes, setDislikes] = React.useState(0)
	const [action, setAction] = React.useState(null)

	const like = () => {
		setLikes(1)
		setDislikes(0)
		setAction('liked')
	}

	const dislike = () => {
		setLikes(0)
		setDislikes(1)
		setAction('disliked')
	}

	const actions = [
		<Tooltip key="comment-basic-like" title="Like">
			<span onClick={like}>
				{React.createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
				<span className="comment-action">{likes}</span>
			</span>
		</Tooltip>,
		<Tooltip key="comment-basic-dislike" title="Dislike">
			<span onClick={dislike}>
				{React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
				<span className="comment-action">{dislikes}</span>
			</span>
		</Tooltip>,
		<span key="comment-basic-reply-to">Reply to</span>,
	]
	return (
		<React.Fragment>
			<Comment
				actions={actions}
				author={<a>{data?.author}</a>}
				avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
				content={<p>{data?.title}</p>}
				datetime={
					<Tooltip title={data?.created_at}>
						<span>{data?.created_at}</span>
					</Tooltip>
				}></Comment>
		</React.Fragment>
	)
}
