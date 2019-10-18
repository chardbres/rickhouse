'use strict'

const store = require('../store')

// Sign-up success and failure UI
const onSignUpSucces = () => {
  $('.sign-up').trigger('reset')
  console.log('Signed up successfully!')
}

const onSignUpFailure = () => {
  $('.sign-up').trigger('reset')
  console.log('Failed to sign up!')
}
// ---

// Sign-in success and failure UI
const onSignInSuccess = responseData => {
  store.user = responseData.user
  console.log('Successful sign-in!')
  // Successful sign-in shows the password change/sign-out fields
  $('.sign-in').trigger('reset')
  $('.sign-in, .sign-up').hide()
  $('.change-password, .sign-out').show()
}

const onSignInFailure = () => {
  console.log('Sign-in failure!')
}
// ---

// Password change success and failure UI
const onPasswordChangeSuccess = () => {
  console.log('Password changed successfully!')
  $('.change-password').trigger('reset')
}

const onPasswordChangeFailure = () => {
  console.log('Failed to change password!')
}
// ---

// Sign-out success and failure UI
const onSignOutSuccess = () => {
  console.log('Signed out successfully!')
  $('.change-password, .sign-out').hide()
  $('.sign-in, .sign-up').show()
}

const onSignOutFailure = () => {
  console.log('Sign-out failed!')
}
// ---

module.exports = {
  onSignUpSucces,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onPasswordChangeSuccess,
  onPasswordChangeFailure,
  onSignOutSuccess,
  onSignOutFailure
}
