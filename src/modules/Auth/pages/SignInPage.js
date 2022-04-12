import * as React from 'react'
import { SignInViewController } from '../viewController'
import { AuthModel } from '../models'

export function SignInPage(props) {
	return <SignInViewController viewModel={props.viewModel} />
}
