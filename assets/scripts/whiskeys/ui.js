'use strict'

const store = require('../store')
const whiskeysPageTemplate = require('../templates/whiskey-listing.handlebars')

// Whiskey creation success and failure UI
const onCreateWhiskeySuccess = responseData => {
  console.log('Successfully created!')
  store.whiskey = responseData.whiskey
  $('.message').text('...whiskey created successfully.')
  console.log(responseData)
}

const onCreateWhiskeyFailure = () => {
  console.log('Failed to create whiskey!')
}
// ---

// Whiskey indexing success and failure UI
const onGetWhiskiesSuccess = responseData => {
  console.log('Got whiskies!')
  store.whiskey = responseData.whiskey
  console.log(responseData)

  const whiskeysPageHtml = whiskeysPageTemplate({ whiskeys: responseData.whiskeys })
  $('.canvas').hide().html(whiskeysPageHtml).fadeIn(1000)
}

module.exports = {
  onCreateWhiskeySuccess,
  onCreateWhiskeyFailure,
  onGetWhiskiesSuccess
}
