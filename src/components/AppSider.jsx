import * as React from 'react'
import { Layout, Menu, message } from 'antd'
import { PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { AuthContext } from 'context/Auth'
// import {} from 'modules/Auth/viewModel'
const AppSider = () => {
	const Authcontext = React.useContext(AuthContext)
	// console.log(Authcontext)
	const [collapsed, setCollapsed] = React.useState(false)
	const isLoggedIn = Authcontext.isLoggedIn

	const onCollapse = () => {
		setCollapsed(!collapsed)
	}
	const handleSignOut = () => {
		message.loading('로그아웃중...', 0.5).then(() => {
			message.success('로그아웃성공!', 2.5)
		})
		window.localStorage.removeItem('accessToken')
	}

	return (
		<Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
			<div className="logo" />
			<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
				<Menu.Item key="1" icon={<PieChartOutlined />}>
					<Link href={'/'}>메인화면</Link>
				</Menu.Item>
				<Menu.SubMenu key="sub1" icon={<UserOutlined />} title="유저">
					{isLoggedIn ? (
						<React.Fragment>
							<Menu.Item key="2" onClick={() => handleSignOut()}>
								로그아웃
							</Menu.Item>
							<Menu.Item key="3" onClick={() => handleSignOut()}>
								마이페이지
							</Menu.Item>
						</React.Fragment>
					) : (
						<React.Fragment>
							<Menu.Item key="2">
								<Link href={'/signIn'}>로그인</Link>
							</Menu.Item>
							<Menu.Item key="3">회원가입</Menu.Item>
						</React.Fragment>
					)}
				</Menu.SubMenu>
				<Menu.SubMenu key="sub2" icon={<TeamOutlined />} title="게시판">
					<Menu.Item key="4">
						<Link href={'/board'}>리스트</Link>
					</Menu.Item>
					<Menu.Item key="5">
						<Link href={'/board/create'}>작성</Link>
					</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		</Layout.Sider>
	)
}
export default AppSider
