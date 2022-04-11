import * as React from 'react'
import App from 'next/app'
import 'styles/reset.css'
import 'antd/dist/antd.min.css'
import AppLayout from 'components/AppLayout'

import { RouterProvider } from 'context/Router'

import { Provider } from 'mobx-react'
import RootStore from 'modules/Board/store'
const rootStore = new RootStore()

import { ApolloProvider } from 'react-apollo'
import { client } from 'config/apolloClientConfig'

export default class MyApp extends App {
	constructor(props) {
		super(props)
	}

	render() {
		const BoardProvier = Provider
		const { Component, pageProps } = this.props
		return (
			<ApolloProvider client={client}>
				<RouterProvider>
					<BoardProvier {...rootStore.getStores()}>
						<AppLayout>
							<Component client={client} {...pageProps} />
						</AppLayout>
					</BoardProvier>
				</RouterProvider>
			</ApolloProvider>
		)
	}
}

export async function getServerSideProps(context) {
	return {
		props: { data }, // will be passed to the page component as props
	}
}
