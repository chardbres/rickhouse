'use strict'

const authEvents = require('./auth/events.js')

$(() => {
  // Authorization applications
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
})
