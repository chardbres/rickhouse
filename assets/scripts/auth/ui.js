'use strict'

const whiskeyApi = require('../whiskeys/api.js')
const whiskeyUi = require('../whiskeys/ui.js')
const store = require('../store')
// Declares a variable to store the original image div for retrieval later
let divClone = null

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
  divClone = $('.img-div').clone()
  store.user = responseData.user
  // Successful sign-in shows the password change/sign-out fields
  $('.sign-in').trigger('reset')
  $('.sign-in, .sign-up').hide()
  $('.auth-message').text('signed in.').fadeIn(800, function () { $('.auth-message').delay(1000).fadeOut(2000) })
  $('.chart-title').fadeIn(800)
  $('.change-password, .sign-out').show()
  // Get full list of user whiskies on sign-in
  whiskeyApi.getWhiskies()
    .then(whiskeyUi.onGetWhiskiesSuccess)
  $('.message').text('here are your whiskies. lucky you.')
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
  $('.change-password, .sign-out').hide()
  $('.sign-in, .sign-up').show()
  $('.auth-message').text('signed out.').fadeIn(800)
  $('.canvas').html(divClone)
  $('.chart-title').fadeOut(800)
  $('.message').text('goodbye.')
}

const onSignOutFailure = () => {
  $('.auth-message').text('failed to sign out.')
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
