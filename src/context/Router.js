import * as React from 'react'
import { withRouter } from 'next/router'
const RouterContext = React.createContext(null)
const RouterConsumer = RouterContext.Consumer

class Router extends React.Component {
	static contextType = RouterContext
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<RouterContext.Provider value={this.props.router}>
				{this.props.children}
			</RouterContext.Provider>
		)
	}
}
const RouterProvider = withRouter(Router)

export { RouterContext, RouterConsumer, RouterProvider }
