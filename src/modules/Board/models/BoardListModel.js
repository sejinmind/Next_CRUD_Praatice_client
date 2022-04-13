import { observable, action, makeObservable, toJS } from 'mobx'
import {
	GET_BOARD_LIST_QUERY,
	GET_BOARD_DETAIL_MUTATION,
	GET_BOARD_DETAIL_QUERY,
	ADD_ARTICLE_MUTATION,
	DELETE_ARTICLE_MUTATION,
} from '../shared'
export class BoardListModel {
	constructor() {
		this.boardList = []
		makeObservable(this, {
			boardList: observable,
			getBoardList: action,
			getList: action,
			getOne: action,
			getBoardDetail: action,
			addArticle: action,
			deleteArticle: action,
		})
	}
	getList = (client) => {
		const result = client.query({
			query: GET_BOARD_LIST_QUERY,
		})
		return result
	}

	getBoardList = async (client) => {
		try {
			const result = await this.getList(client)
			const data = result.data.getBoardList
			this.boardList.replace(data)
			return this.boardList
		} catch (error) {
			console.log('Failed to getBoardList')
			throw error
		}
	}

	getOne = (_id, client) => {
		const result = client.query({
			query: GET_BOARD_DETAIL_QUERY,
			variables: { _id },
		})
		return result
	}

	getBoardDetail = async (_id, client) => {
		try {
			const result = await this.getOne(_id, client)
			return result?.data?.getBoardDetail
		} catch (error) {
			console.log('Failed to getBoardList')
			throw error
		}
	}
	addArticle = async (state, client) => {
		try {
			const result = await client.mutate({
				mutation: ADD_ARTICLE_MUTATION,
				variables: {
					author: state.author,
					title: state.title,
					isRemove: false,
				},
			})
			this.boardList.push(result.data.addArticle)
		} catch (error) {
			console.log('Failed to getBoardList')
			throw error
		}
	}
	deleteArticle = async (_id, client) => {
		try {
			const result = await client.mutate({
				mutation: DELETE_ARTICLE_MUTATION,
				variables: {
					_id,
				},
			})
			const targetId = result.data.deleteArticle._id
			this.boardList.replace(this.boardList.filter((list) => list._id !== targetId))
		} catch (error) {
			console.log('Failed to Delete Article')
			throw error
		}
	}
}
