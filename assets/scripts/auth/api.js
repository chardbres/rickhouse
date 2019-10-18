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
}

// Sign-in api
const signIn = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
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
}

module.exports = {
  signUp,
  signIn,
  passwordChange
}
