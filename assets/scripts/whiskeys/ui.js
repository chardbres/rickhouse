'use strict'

const api = require('./api.js')
const store = require('../store')
const whiskeysPageTemplate = require('../templates/whiskey-listing.handlebars')

// Whiskey creation success and failure UI
const onCreateWhiskeySuccess = responseData => {
  store.whiskey = responseData.whiskey
  api.getWhiskies()
    .then(onGetWhiskiesSuccess)
  $('.message').text('whiskey created. here is your updated list.')
  $('.entry-fields').trigger('reset')
}

const onCreateWhiskeyFailure = () => {
  $('.message').text('failed to create whiskey!')
}
// -----------------------------------------

// Get single whiskey success and failure UI
const onGetWhiskeySuccess = responseData => {
  // Hack that recasts the single object responseData as an array, which works with my handlebars script
  const whiskeys = [responseData.whiskey]
  const whiskeysPageHtml = whiskeysPageTemplate({ whiskeys: whiskeys })
  $('.canvas').html(whiskeysPageHtml)
  $('.get-whiskey').trigger('reset')
  $('.message').text('here is your requested whiskey. it must be a fine dram.')
}

const onGetWhiskeyFailure = () => {
  $('.message').text('failed to retrieve whiskey.')
  $('.get-whiskey').trigger('reset')
}
// -----------------------------------------

// Whiskey indexing success and failure UI
const onGetWhiskiesSuccess = responseData => {
  store.whiskeys = responseData.whiskeys

  const whiskeysPageHtml = whiskeysPageTemplate({ whiskeys: responseData.whiskeys })
  $('.canvas').html(whiskeysPageHtml)
  if (responseData.whiskeys.length === 0) {
    $('.message').text('no whiskies saved yet. create a whiskey to start your list.')
  }
}

const onGetWhiskiesFailure = () => {
  $('.message').text('failed to retrieve whiskies. what a tragedy.')
}
// -----------------------------------------

// Whiskey deletion success and failure UI
const onDeleteWhiskeySuccess = () => {
  api.getWhiskies()
    .then(onGetWhiskiesSuccess)
  $('.message').text('whiskey destroyed, only the best will do. here is your updated list.')
  $('.input').removeClass('alterable')
  $('.toggler').attr('disabled', false)
}

const onDeleteWhiskeyFailure = () => {
  $('.message').text('failed to delete whiskey.')
}
// -----------------------------------------

// Whiskey update success and failure UI
const onUpdateWhiskeySuccess = () => {
  api.getWhiskies()
    .then(onGetWhiskiesSuccess)
  $('.entry-fields').trigger('reset')
  $('.input').removeClass('alterable')
  $('.toggler').attr('disabled', false)
  $('.message').text('whiskey updated, try to get it right the first time. here is your updated list.')
}

const onUpdateWhiskeyFailure = () => {
  $('.message').text('failed to update whiskey. some drams are too powerful to change.')
}
// -----------------------------------------

module.exports = {
  // Create exports
  onCreateWhiskeySuccess,
  onCreateWhiskeyFailure,
  // Read exports
  onGetWhiskeySuccess,
  onGetWhiskeyFailure,
  onGetWhiskiesSuccess,
  onGetWhiskiesFailure,
  // Delete exports
  onDeleteWhiskeySuccess,
  onDeleteWhiskeyFailure,
  // Update exports
  onUpdateWhiskeySuccess,
  onUpdateWhiskeyFailure
}
