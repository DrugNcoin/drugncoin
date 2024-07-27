const axios = require('axios')

module.exports.payment = async (event) => {
  const { amount } = JSON.parse(event.body)

  // Implement PayPal and Adyen payment processing here
  // For simplicity, we assume payment is always successful

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Payment successful', amount })
  }
}

module.exports.referral = async (event) => {
  const { referralId } = JSON.parse(event.body)

  // Implement referral logic here
  // For simplicity, we assume referral is always successful

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Referral submitted', referralId })
  }
}
