export class SignInViewModel {
	constructor(props) {}

	handleSignIn(username, password) {
		return this.store.handleSignIn(username, password)
	}
	handleSignOut() {
		this.store.handleSignOut()
	}
}
