import * as React from 'react'
const AuthContext = React.createContext(null)
const AuthConsumer = AuthContext.Consumer

class AuthProvider extends React.Component {
	static contextType = AuthContext
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<AuthContext.Provider value={this.props.authModel}>
				{this.props.children}
			</AuthContext.Provider>
		)
	}
}

export { AuthContext, AuthConsumer, AuthProvider }
