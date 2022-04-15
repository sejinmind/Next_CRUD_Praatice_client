import * as React from 'react'
import { SignInViewController } from '../viewController'
import { AuthModel } from '../models'
import { SignInViewModel } from '../viewmodel'

const authModel = new AuthModel()
const viewModel = new SignInViewModel(authModel)
export function SignInPage() {
	return <SignInViewController viewModel={viewModel} />
}
