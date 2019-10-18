'use strict'

const config = require('../config.js')
const store = require('../store.js')

// Sign-up api
const signUp = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
  console.log("Got to here!")
}

// Sign-in api
const signIn = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
  console.log("Got to here!")
}

// Password change api
const passwordChange = formData => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
  console.log("Got to here!")
}

module.exports = {
  signUp,
  signIn,
  passwordChange
}
