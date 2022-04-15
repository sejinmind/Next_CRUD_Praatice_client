import * as React from 'react'
import Head from 'next/head'
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
		<>
			<Head>
				<title>퀘스트 깨고 싶다</title>
			</Head>
			<ApolloProvider client={client}>
				<RouterProvider>
					<AuthProvider {...authRootStore.getStores()}>
						<BoardProvier {...boardRootStore.getStores()}>
							<AppLayout>
								<Component client={client} {...pageProps} />
							</AppLayout>
						</BoardProvier>
					</AuthProvider>
				</RouterProvider>
			</ApolloProvider>
		</>
	)
}
