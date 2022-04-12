import * as React from 'react'
import { SignInPage } from 'modules/Auth/pages'
export default function SignIn({ authViewModel }) {
	return <SignInPage viewModel={authViewModel} />
}
