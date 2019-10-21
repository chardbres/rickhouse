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

  onCreate(name, variety, region, age, taste, price)
}

const onCreate = function (name, variety, region, age, taste, price) {
  event.preventDefault()

  console.log(name, variety, region, age, taste, price)
  api.createWhiskey(name, variety, region, age, taste, price)
    .then(ui.onCreateWhiskeySuccess)
    .catch(ui.onCreateWhiskeyFailure)
}

module.exports = {
  onCreate,
  makeWhiskey
}
