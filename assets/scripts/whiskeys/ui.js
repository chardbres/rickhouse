'use strict'

const store = require('../store')
const data = { whiskeys: [] }
const whiskeysPageTemplate = require('..templates/whiskey-listing.handlebars')
const whiskeysPageHtml = whiskeysPageTemplate({ whiskeys: data.whiskeys })

// Whiskey creation success and failure UI
const onCreateWhiskeySuccess = responseData => {
  console.log('Successfully created!')
  store.whiskey = responseData.whiskey
  $('.canvas').append(whiskeysPageHtml)
  $('.message').text('...whiskey create successfully.')
  console.log(store.whiskey)
}

const onCreateWhiskeyFailure = () => {
  console.log('Failed to create whiskey!')
}
// ---

// Whiskey indexing success and failure UI
const onGetWhiskiesSuccess = () => {
  console.log('Got whiskies!')
  $('.canvas').append(whiskeysPageHtml)
}

module.exports = {
  onCreateWhiskeySuccess,
  onCreateWhiskeyFailure,
  onGetWhiskiesSuccess
}
