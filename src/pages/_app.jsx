import * as React from 'react'
import App from 'next/app'
import 'styles/reset.css'
import 'antd/dist/antd.min.css'
import AppLayout from 'components/AppLayout'

import { RouterProvider, AuthProvider } from 'context'

import { Provider } from 'mobx-react'

import AuthRootStore from 'modules/Auth/store'
const authRootStore = new AuthRootStore()

import BoardRootStore from 'modules/Board/store'
const boardRootStore = new BoardRootStore()

import { ApolloProvider } from 'react-apollo'
import { client } from 'config/apolloClientConfig'

export default function MyApp(props) {
	const BoardProvier = Provider
	const { Component, pageProps } = props

	return (
		<ApolloProvider client={client}>
			<RouterProvider>
				<AuthProvider {...authRootStore.getStores()}>
					<BoardProvier {...boardRootStore.getStores()}>
						<AppLayout>
							<Component
								authViewModel={authRootStore.getStores('authModels').authModel}
								client={client}
								{...pageProps}
							/>
						</AppLayout>
					</BoardProvier>
				</AuthProvider>
			</RouterProvider>
		</ApolloProvider>
	)
}
