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
  console.log('Sign-in failure!')
}
// ---

module.exports = {
  onSignUpSucces,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
