import * as React from 'react'
const AuthContext = React.createContext(null)
const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
	const authContext = React.useContext(AuthContext)
	React.useEffect(() => {
		const isLoggedIn = window.localStorage.getItem('user')
		if (typeof isLoggedIn === 'string') {
			props.authModel.setUserData(JSON.parse(isLoggedIn))
		}
	})
	return <AuthContext.Provider value={props.authModel}>{props.children}</AuthContext.Provider>
}

export { AuthContext, AuthConsumer, AuthProvider }
