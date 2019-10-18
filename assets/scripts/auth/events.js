'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// Sign-up event handler
const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
// ---

// Sign-in event handler
const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
// ---

// Password change event handler
const onPasswordChange = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.passwordChange(formData)
    .then(ui.onPasswordChangeSuccess)
    .catch(ui.onPasswordChangeFailure)
}
// ---

// Sign-out event handler
const onSignOut = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onPasswordChange,
  onSignOut
}
