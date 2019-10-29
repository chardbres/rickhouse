'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// Removes existing '.alterable' class from the div and adds it to another, so that there is only one '.alterable' div at any time.
const makeAlterable = event => {
  if ($(event.target).hasClass('alterable')) {
    $('.items').removeClass('alterable')
    $('.input').removeClass('alterable')
  } else {
    $('.items').removeClass('alterable')
    $(event.target).addClass('alterable')
    $('.input').addClass('alterable')
    $('.message').text('use forms below to update whiskey.')
    $('.create-whiskey, .delete-whiskey, .get-whiskey, .get-whiskies').attr('disabled', true)
  }
}
// -----------------------------------------

// Script to create a new whiskey
const onCreateWhiskey = event => {
  event.preventDefault()

  api.createWhiskey(getFormFields(event.target))
    .then(ui.onCreateWhiskeySuccess)
    .catch(ui.onCreateWhiskeyFailure)
}
// -----------------------------------------

// Script to return a single whiskey
const onGetWhiskey = event => {
  event.preventDefault()

  api.getWhiskey(getFormFields(event.target))
    .then(ui.onGetWhiskeySuccess)
    .catch(ui.onGetWhiskeyFailure)
}
// -----------------------------------------

// Script to return an index of all whiskies
const onGetWhiskies = event => {
  event.preventDefault()

  api.getWhiskies()
    .then(ui.onGetWhiskiesSuccess)
    .catch(ui.onGetWhiskiesFailure)
}
// -----------------------------------------

// Script to delete a whiskey
const onDeleteWhiskey = event => {
  event.preventDefault()

  // Gets the whiskey ID by the html ID attribute
  const whiskeyId = $('.alterable').attr('id')
  api.deleteWhiskey(whiskeyId)
    .then(ui.onDeleteWhiskeySuccess)
    .catch(ui.onDeleteWhiskeyFailure)
}
// -----------------------------------------

// Script to update a whiskey
const onUpdateWhiskey = event => {
  event.preventDefault()

  const whiskeyId = $('.alterable').attr('id')
  const formData = getFormFields($('.entry-fields')[0])
  api.updateWhiskey(formData, whiskeyId)
    .then(ui.onUpdateWhiskeySuccess)
    .catch(ui.onUpdateWhiskeyFailure)
}
// -----------------------------------------

module.exports = {
  onCreateWhiskey,
  onDeleteWhiskey,
  onGetWhiskey,
  onGetWhiskies,
  makeAlterable,
  onUpdateWhiskey
}
