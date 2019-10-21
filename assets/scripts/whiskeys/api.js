'use strict'

const config = require('../config.js')
const store = require('../store.js')

// Function creates a new game on the server
const createWhiskey = function (name, variety, region, age, taste, price) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/whiskeys',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'whiskey': {
        'name': name,
        'variety': variety,
        'region': region,
        'age': age,
        'taste': taste,
        'price': price
      }
    }
  })
}

module.exports = {
  createWhiskey
}
