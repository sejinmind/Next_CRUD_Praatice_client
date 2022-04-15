export class SignInViewModel {
	constructor(authStore, client) {
		this.store = authStore
		this.apolloClient = client
	}

	handleSignIn(username, password) {
		return this.store.handleSignIn(username, password)
	}
	handleSignOut() {
		this.store.handleSignOut()
	}
}
