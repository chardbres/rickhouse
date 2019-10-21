'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreate = (event) => {
  event.preventDefault()

  const name = $('.name').val()
  const variety = $('.variety').val()
  const region = $('.region').val()
  const age = $('.age').val()
  const taste = $('.taste').val()
  const price = $('.price').val()
  api.createWhiskey(name, variety, region, age, taste, price)
    .then(ui.onCreateWhiskeySuccess)
    .catch(ui.onCreateWhiskeyFailure)
}

module.exports = {
  onCreate
}
