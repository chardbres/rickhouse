'use strict'

const store = require('../store')

// Whiskey creation success and failure UI
const onCreateWhiskeySuccess = () => {
  console.log('Successfully created!')
}

const onCreateWhiskeyFailure = () => {
  console.log('Failed to create whiskey!')
}
// ---

module.exports = {
  onCreateWhiskeySuccess,
  onCreateWhiskeyFailure
}
