'use strict'

const api = require('./api.js')
const store = require('../store')
const whiskeysPageTemplate = require('../templates/whiskey-listing.handlebars')

// Whiskey creation success and failure UI
const onCreateWhiskeySuccess = responseData => {
  console.log('Successfully created!')
  store.whiskey = responseData.whiskey
  $('.message').text('...whiskey created successfully.')
  $('.entry-fields').trigger('reset')
}

const onCreateWhiskeyFailure = () => {
  console.log('Failed to create whiskey!')
}
// ---

// Get single whiskey success and failure UI
const onGetWhiskeySuccess = responseData => {
  // store.whiskey = responseData.whiskeys
  console.log(responseData)

  // Hack that recasts the single object responseData as an array, which works with my handlebars script
  const whiskeys = [responseData.whiskey]
  const whiskeysPageHtml = whiskeysPageTemplate({ whiskeys: whiskeys })
  $('.canvas').hide().html(whiskeysPageHtml).fadeIn(1000)
}
// ---

// Whiskey indexing success and failure UI
const onGetWhiskiesSuccess = responseData => {
  store.whiskey = responseData.whiskey
  console.log(responseData)

  const whiskeysPageHtml = whiskeysPageTemplate({ whiskeys: responseData.whiskeys })
  $('.canvas').hide().html(whiskeysPageHtml).fadeIn(1000)
}
// ---

const onDeleteSuccess = () => {
  api.getWhiskies()
    .then(onGetWhiskiesSuccess())
  console.log('Made it here!')
}

const onUpdateSuccess = responseData => {
  api.getWhiskies()
    .then(onGetWhiskiesSuccess())
}

module.exports = {
  onCreateWhiskeySuccess,
  onCreateWhiskeyFailure,
  onGetWhiskeySuccess,
  onGetWhiskiesSuccess,
  onDeleteSuccess,
  onUpdateSuccess
}
