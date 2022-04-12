import * as React from 'react'
import { Layout, PageHeader, Avatar, Typography, Button } from 'antd'
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
		<LayoutHeader
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
				onBack={() => router.back()}
				title={pageHeader.title}
				subTitle={pageHeader.subTitle}
			/>
			{isLoggedIn ? (
				<AvatarContainer>
					<Avatar src={user.avatar} />
					<Typography.Text>{user.username}</Typography.Text>
				</AvatarContainer>
			) : (
				<AvatarContainer>
					<Button type="primary" onClick={() => router.push('/signIn')}>
						로그인
					</Button>
				</AvatarContainer>
			)}
		</LayoutHeader>
	)
}
const LayoutHeader = styled(Layout.Header)`
	.site-page-header {
		padding: 12px 24px;
	}
`
const AvatarContainer = styled.div`
	margin: 0 25px;
	.ant-avatar {
		margin-right: 10px;
	}
`
