export class BoardListViewModel {
	constructor(boardStore, client, options = {}) {
		this.store = boardStore
		this.apolloClient = client
	}
	getBoardList = () => {
		// this.store.getNotCompleteTodoList(this.apolloClient)
		this.store.getBoardList(this.apolloClient)

		return this.store.boardList
	}
	getBoardDetail = (_id) => {
		return this.store.getBoardDetail(_id, this.apolloClient)
	}
	addArticle = (state) => {
		this.store.addArticle(state, this.apolloClient)
	}
	updateArticle = (_id, state) => {
		this.store.updateArticle(_id, state, this.apolloClient)
	}
	deleteArticle = (_id) => {
		this.store.deleteArticle(_id, this.apolloClient)
	}
}
