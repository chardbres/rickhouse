'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const makeWhiskey = event => {
  const name = $('.name').value()
  const variety = $('.variety').value()
  const region = $('.region').value()
  const age = $('.age').value()
  const taste = $('.taste').value()
  const price = $('.price').price()
}

const onCreate = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.createWhiskey(formData)
    .then(ui.onCreateWhiskeySuccess)
    .catch(ui.onCreateWhiskeyFailure)
}

module.exports = {
  onCreate,
  makeWhiskey
}
