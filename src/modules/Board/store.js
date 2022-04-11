import { BoardListModel } from './models/BoardListModel'

export default class RootStore {
	static type = {
		BOARD_MODEL: 'boardModel',
	}

	constructor() {
		this.boardModel = new BoardListModel(RootStore.type.BOARD_MODEL)
	}
	getStores = () => ({
		[RootStore.type.BOARD_MODEL]: this.boardModel,
	})
}
