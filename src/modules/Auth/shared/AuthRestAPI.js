import axios from 'axios'

export const handleSignIn = async (username, password) => {
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
			return response
		})
		.catch((error) => {
			if (error.response) {
				const { response } = error
				if (response.status >= 300) {
					return response
				}
			}
		})
}
