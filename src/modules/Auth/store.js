import { AuthModel } from './models/AuthModel'

export default class RootStore {
	static type = {
		AUTH_MODEL: 'authModel',
	}

	constructor() {
		this.authModel = new AuthModel(RootStore.type.AUTH_MODEL)
	}
	getStores = () => ({
		[RootStore.type.AUTH_MODEL]: this.authModel,
	})
}
