'use strict'

const store = require('../store')

// Sign-up success and failure UI
const onSignUpSuccess = () => {
  $('.sign-up').trigger('reset')
  $('.auth-message').text('signed up. sign-in to start tracking your whiskey.').fadeIn(800, function () { $('.auth-message').delay(1000).fadeOut(2000) })
}

const onSignUpFailure = () => {
  $('.sign-up').trigger('reset')
  $('.auth-message').text('failed to sign up. email already taken, or passwords do not match.').fadeIn(800, function () { $('.auth-message').delay(1000).fadeOut(2000) })
}
// ---

// Sign-in success and failure UI
const onSignInSuccess = responseData => {
  store.user = responseData.user
  // Successful sign-in shows the password change/sign-out fields
  $('.sign-in').trigger('reset')
  $('.sign-in, .sign-up').hide()
  $('.auth-message').text('successfully signed in.').fadeIn(800, function () { $('.auth-message').delay(1000).fadeOut(2000) })
  $('.chart-title').fadeIn(800)
  $('.change-password, .sign-out').show()
}

const onSignInFailure = () => {
  $('.sign-in').trigger('reset')
  $('.auth-message').text('could not sign in. check credentials.').fadeIn(800, function () { $('.auth-message').delay(1000).fadeOut(2000) })
}
// ---

// Password change success and failure UI
const onPasswordChangeSuccess = () => {
  console.log('password changed successfully.').fadeIn(800, function () { $('.auth-message').delay(1000).fadeOut(2000) })
  $('.change-password').trigger('reset')
}

const onPasswordChangeFailure = () => {
  console.log('failed to change password.')
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
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onPasswordChangeSuccess,
  onPasswordChangeFailure,
  onSignOutSuccess,
  onSignOutFailure
}
