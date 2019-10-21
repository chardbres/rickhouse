'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// Script that runs on creation of a new whiskey
const onCreate = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createWhiskey(formData)
    .then(ui.onCreateWhiskeySuccess)
    .catch(ui.onCreateWhiskeyFailure)
}

const onGetWhiskies = event => {
  event.preventDefault()

  api.getWhiskies()
    .then(ui.onGetWhiskiesSuccess)
    .catch(ui.onGetWhiskiesFailure)
}

const onDeleteWhiskey = event => {
  console.log('made it this far!')
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.deleteWhiskey(formData)
    .then(ui.onDestroySuccess)
    .catch(ui.onDestroyFailure)
}

module.exports = {
  onCreate,
  onDeleteWhiskey,
  onGetWhiskies
}
