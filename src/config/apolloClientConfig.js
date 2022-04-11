import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const BACKEND_ENDPOINT_PORT = 8000
const httpLink = createHttpLink({
	uri: `http://localhost:${BACKEND_ENDPOINT_PORT}/graphql`,
})

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
})
export { client }
