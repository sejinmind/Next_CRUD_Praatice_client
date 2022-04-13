import { observable, action, makeObservable, toJS } from 'mobx'
import { message } from 'antd'
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
					// 예외 처리 더 하고싶은데... mecallAPI 너무 한정적이네,,,
					if (response.status === 401) {
						message.error('이메일 혹은 패스워드가 잘못되었습니다.', 1.0)
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
