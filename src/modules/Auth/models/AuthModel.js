import { observable, action, makeObservable, toJS } from 'mobx'
import { handleSignIn as handleSignInAPI } from '../shared'
import axios from 'axios'
export class AuthModel {
	constructor() {
		this.user = {}
		this.isLoggedIn = false
		makeObservable(this, {
			user: observable,
			isLoggedIn: observable,
			handleSignIn: action,
			handleSignOut: action,
		})
	}

	handleSignIn = async (username, password) => {
		// const result = await handleSignInAPI(username, password)
		await axios({
			url: 'https://www.mecallapi.com/api/login',
			method: 'post',
			data: {
				username,
				password,
			},
		})
			.then((response) => {
				window.localStorage.setItem('accessToken', response.data.accessToken)
				this.isLoggedIn = true
				this.user = response.data.user
			})
			.catch((error) => {
				if (error.response) {
					const { response } = error
					if (response.status >= 300) {
						console.log(response)
					}
				}
			})
		const accessToken = window.localStorage.getItem('accessToken')
		if (accessToken === '' || accessToken === 'undefined' || accessToken === null) {
			return
		} else {
			return 'ok'
		}
	}

	handleSignOut = () => {
		this.isLoggedIn = false
		window.localStorage.removeItem('accessToken')
	}
}
