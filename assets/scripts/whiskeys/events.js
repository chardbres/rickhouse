'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// Script that runs on creation of a new whiskey
const onCreate = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.createWhiskey(formData)
    .then(ui.onCreateWhiskeySuccess)
    .catch(ui.onCreateWhiskeyFailure)
}

const onGetWhiskies = event => {
  api.getWhiskies()
    .then(ui.onGetWhiskiesSuccess)
    .catch(ui.onGetWhiskiesFailure)
}

module.exports = {
  onCreate,
  onGetWhiskies
}
