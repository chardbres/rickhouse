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
// -----------------------------------------

const getWhiskey = formData => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/whiskeys/' + formData.whiskey.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// -----------------------------------------

// Function indexes the database of whiskies
const getWhiskies = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/whiskeys',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// -----------------------------------------

const deleteWhiskey = whiskeyId => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/whiskeys/' + whiskeyId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// -----------------------------------------

const updateWhiskey = (formData, whiskeyId) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/whiskeys/' + whiskeyId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
// -----------------------------------------

module.exports = {
  createWhiskey,
  getWhiskey,
  getWhiskies,
  deleteWhiskey,
  updateWhiskey
}
