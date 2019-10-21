'use strict'

const authEvents = require('./auth/events.js')
const whiskeyEvents = require('./whiskeys/events.js')

$(() => {
  // Page initializations
  $('.change-password').hide()
  $('.sign-out').hide()
  // Authorization applications
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onPasswordChange)
  $('.sign-out').on('submit', authEvents.onSignOut)
  // CRUD applications
  $('.submission').on('submit', whiskeyEvents.makeWhiskey)
})
