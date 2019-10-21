'use strict'

const store = require('../store')
const data = { whiskeys: [] }
const whiskeysPageTemplate = require('..templates/whiskey-listing.handlebars')
const whiskeysPageHtml = whiskeysPageTemplate({ whiskeys: data.whiskeys })

// Whiskey creation success and failure UI
const onCreateWhiskeySuccess = () => {
  console.log('Successfully created!')
  $('.canvas').append(whiskeysPageHtml)
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
