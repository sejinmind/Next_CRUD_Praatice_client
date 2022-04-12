import * as React from 'react'
import { Layout, Menu, message } from 'antd'
import { PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { AuthContext } from 'context/Auth'
import { observer } from 'mobx-react-lite'

const AppSider = observer(() => {
	const Authcontext = React.useContext(AuthContext)
	const [collapsed, setCollapsed] = React.useState(false)
	const { isLoggedIn, handleSignOut } = Authcontext

	const onCollapse = () => {
		setCollapsed(!collapsed)
	}
	const SignOutAction = () => {
		message.success('로그아웃성공!', 2.5)
		handleSignOut()
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
							<Menu.Item key="2" onClick={() => SignOutAction()}>
								로그아웃
							</Menu.Item>
							<Menu.Item key="3" onClick={() => SignOutAction()}>
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
})
export default AppSider
