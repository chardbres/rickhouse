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

// Function indexes the database of whiskies
const getWhiskies = () => {
  return $.ajax({
    url: config.apiUrl + '/whiskeys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteWhiskey = formData => {
  return $.ajax({
    url: config.apiUrl + '/whiskeys/' + formData.whiskey.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createWhiskey,
  getWhiskies,
  deleteWhiskey
}
