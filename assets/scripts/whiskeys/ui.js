'use strict'

const api = require('./api.js')
const store = require('../store')
const whiskeysPageTemplate = require('../templates/whiskey-listing.handlebars')

// Whiskey creation success and failure UI
const onCreateWhiskeySuccess = responseData => {
  store.whiskey = responseData.whiskey
  api.getWhiskies()
    .then(onGetWhiskiesSuccess)
  $('.message').text('whiskey created successfully.')
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
  $('.message').text('here is your requested whiskey. it must be a fine dram.')
}

const onGetWhiskeyFailure = () => {
  $('.message').text('failed to retrieve whiskey.')
}
// -----------------------------------------

// Whiskey indexing success and failure UI
const onGetWhiskiesSuccess = responseData => {
  store.whiskeys = responseData.whiskeys

  const whiskeysPageHtml = whiskeysPageTemplate({ whiskeys: responseData.whiskeys })
  $('.canvas').html(whiskeysPageHtml)
}

const onGetWhiskiesFailure = () => {
  $('.message').text('failed to retrieve whiskies. what a tragedy.')
}
// -----------------------------------------

// Whiskey deletion success and failure UI
const onDeleteWhiskeySuccess = () => {
  api.getWhiskies()
    .then(onGetWhiskiesSuccess)
  $('.message').text('whiskey destroyed. only the best will do.')
}

const onDeleteWhiskeyFailure = () => {
  $('.message').text('failed to delete whiskey.')
}
// -----------------------------------------

// Whiskey update success and failure UI
const onUpdateWhiskeySuccess = () => {
  api.getWhiskies()
    .then(onGetWhiskiesSuccess)
  console.log('Made it!')
  $('.entry-fields').trigger('reset')
  $('.message').text('whiskey updated. try to get it right the first time.')
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
