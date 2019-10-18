'use strict'

const store = require('../store')

// Sign-up success and failure UI
const onSignUpSucces = () => {
  console.log('Signed up successfully!')
}

const onSignUpFailure = () => {
  console.log('Failed to sign up!')
}
// ---

// Sign-in success and failure UI
const onSignInSuccess = responseData => {
  store.user = responseData.user
  console.log('Successful sign-in!')
}

const onSignInFailure = () => {
  store.user = responseData.user
  console.log('Sign-in failure!')
}
// ---

// Password change success and failure UI
const onPasswordChangeSuccess = () => {
  console.log('Password changed successfully!')
}

const onPasswordChangeFailure = () => {
  console.log('Failed to change password!')
}
// ---

module.exports = {
  onSignUpSucces,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onPasswordChangeSuccess,
  onPasswordChangeFailure
}
