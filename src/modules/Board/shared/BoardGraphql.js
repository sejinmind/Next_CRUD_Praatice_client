import { gql } from 'graphql-tag'

export const GET_BOARD_LIST_QUERY = gql`
	{
		getBoardList {
			_id
			author
			title
			created_at
			isRemove
		}
	}
`

export const GET_BOARD_DETAIL_MUTATION = gql`
	{
		getBoardDetail {
			_id
			author
			title
			created_at
			isRemove
		}
	}
`

export const ADD_ARTICLE_MUTATION = gql`
	mutation ($author: String!, $title: String!, $isRemove: Boolean!) {
		addArticle(author: $author, title: $title, isRemove: $isRemove) {
			author
			title
			isRemove
		}
	}
`

export const DELETE_ARTICLE_MUTATION = gql`
	mutation ($_id: String!) {
		deleteArticle(_id: $_id) {
			_id
			author
			title
			created_at
			isRemove
		}
	}
`
