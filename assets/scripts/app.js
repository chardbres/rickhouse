'use strict'

const authEvents = require('./auth/events.js')
const whiskeyEvents = require('./whiskeys/events.js')

$(() => {
  // Page initializations
  $('.change-password, .sign-out, .chart-title, .entry-fields, .rud-buttons').hide()
  // $('.sign-out').hide()
  // $('.chart-title').hide()
  // Authorization applications
  $('.navbar-toggler').on('click', function () { $('.auth-message').delay(200).fadeOut(800) })
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onPasswordChange)
  $('.sign-out').on('submit', authEvents.onSignOut)
  // CRUD applications
  $('.entry-fields').on('submit', whiskeyEvents.onCreateWhiskey)
  $('.get-whiskey').on('submit', whiskeyEvents.onGetWhiskey)
  $('.get-whiskies').on('submit', whiskeyEvents.onGetWhiskies)
  $('.canvas').on('click', '.items', whiskeyEvents.makeAlterable)
  $('.delete-whiskey').on('submit', whiskeyEvents.onDeleteWhiskey)
  $('.update-whiskey').on('submit', whiskeyEvents.onUpdateWhiskey)
  // Putting this here for now, otherwise it creates annoying problems if in onGetWhiskiesSuccess
  $('.get-whiskies').on('click', function () { $('.message').text('here are your whiskies.') })
})
