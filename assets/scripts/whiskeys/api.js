'use strict'

const config = require('../config.js')
const store = require('../store.js')

// Function creates a new game on the server
const createWhiskey = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/whiskeys',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createWhiskey
}
