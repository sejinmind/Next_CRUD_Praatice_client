import * as React from 'react'
import { BoardDetailView } from '../views'
import { AuthContext, RouterContext } from 'context'

export const BoardDetailViewController = ({ viewModel }) => {
	const authContext = React.useContext(AuthContext)
	const routerContext = React.useContext(RouterContext)
	const [data, setData] = React.useState([])
	React.useEffect(async () => {
		const _id = routerContext.query.slug
		const result = await viewModel?.getBoardDetail(_id)
		setData(result)
	}, [routerContext.query.slug])
	return <BoardDetailView auth={authContext} data={data} />
}
