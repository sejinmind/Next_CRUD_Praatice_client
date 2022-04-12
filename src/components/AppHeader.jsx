import * as React from 'react'
import { Layout, PageHeader, Avatar, Typography } from 'antd'
import { useRouter } from 'next/router'
import { Routes } from 'constant/Routes'
import { AuthContext } from 'context'
import styled from '@emotion/styled'
export default function AppHeader() {
	const [pageHeader, setPageHeader] = React.useState({
		title: '',
		subTitle: '',
	})

	const router = useRouter()

	const authContext = React.useContext(AuthContext)
	const { isLoggedIn, user } = authContext

	React.useEffect(() => {
		Routes.map((Route) => {
			if (Route.pathname === router.pathname) {
				const { title, subTitle } = Route
				setPageHeader({ title, subTitle })
			}
		})
	}, [router.pathname])

	return (
		<Layout.Header
			className="site-layout-background"
			style={{
				padding: 0,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				background: '#fff',
			}}>
			<PageHeader
				className="site-page-header"
				// onBack={() => this.context.back()}
				title={pageHeader.title}
				subTitle={pageHeader.subTitle}
			/>
			{isLoggedIn ? (
				<AvatarContainer>
					<Avatar src={user.avatar} />
					<Typography.Text>{user.username}</Typography.Text>
				</AvatarContainer>
			) : (
				'로그아웃상태'
			)}
		</Layout.Header>
	)
}
const AvatarContainer = styled.div`
	margin: 0 25px;
	.ant-avatar {
		margin-right: 10px;
	}
`
