'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// Removes existing '.alterable' class from the div and adds it to another, so that there is only one '.alterable' div at any time.
const makeAlterable = event => {
  if ($(event.target).class === '.alterable') {
    $(event.target).removeClass('alterable')
  } else {
    $('.alterable').removeClass('alterable')
    $(event.target).toggleClass('alterable', true)
  }
}

// Script to create a new whiskey
const onCreateWhiskey = event => {
  event.preventDefault()

  api.createWhiskey(getFormFields(event.target))
    .then(ui.onCreateWhiskeySuccess)
    .then(api.getWhiskies())
    .catch(ui.onCreateWhiskeyFailure)
}
// ---

// Script to return a single whiskey
const onGetWhiskey = event => {
  event.preventDefault()

  api.getWhiskey(getFormFields(event.target))
    .then(ui.onGetWhiskeySuccess)
    .catch(ui.onGetWhiskeyFailure)
}
// ---

// Script to return an index of all whiskies
const onGetWhiskies = event => {
  event.preventDefault()

  api.getWhiskies()
    .then(ui.onGetWhiskiesSuccess)
    .catch(ui.onGetWhiskiesFailure)
}
// ---

// Script to delete a whiskey
const onDeleteWhiskey = event => {
  event.preventDefault()

  // Gets the whiskey ID by the html ID attribute
  const whiskeyId = $('.alterable').attr('id')
  api.deleteWhiskey(whiskeyId)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}
// ---

// Script to update a whiskey
const onUpdateWhiskey = event => {
  event.preventDefault()

  console.log($('.entry-fields'))
  const whiskeyId = $('.alterable').attr('id')
  const formData = getFormFields($('.entry-fields')[0])
  api.updateWhiskey(formData, whiskeyId)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}
// ---

module.exports = {
  onCreateWhiskey,
  onDeleteWhiskey,
  onGetWhiskey,
  onGetWhiskies,
  makeAlterable,
  onUpdateWhiskey
}
