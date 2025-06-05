const currencies = {
  USD: 1.0,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75,
}

function convertCurrency() {
  // Get values from the form
  const fromCurrency = document.getElementById("from").value
  const toCurrency = document.getElementById("to").value
  const amount = document.getElementById("amount").value

  // Check if amount is entered
  if (!amount || amount <= 0) {
    document.getElementById("result").innerHTML = '<span style="color: #e74c3c;">Please enter a valid amount</span>'
    return
  }

  // Convert amount to number
  const amountNum = Number(amount)

  // Calculate conversion
  const convertedAmount = (amountNum * currencies[toCurrency]) / currencies[fromCurrency]

  // Format the result with proper decimal places
  const formattedAmount = amountNum.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  const formattedResult = convertedAmount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  // Display result with animation
  const resultElement = document.getElementById("result")
  resultElement.style.transform = "scale(0.95)"
  resultElement.style.opacity = "0.8"

  // Display result
  resultElement.innerHTML = `<div>${formattedAmount} ${fromCurrency} = <strong>${formattedResult} ${toCurrency}</strong></div>`

  // Reset animation
  setTimeout(() => {
    resultElement.style.transform = "scale(1)"
    resultElement.style.opacity = "1"
  }, 50)
}

// Set default values when page loads
window.onload = () => {
  // Set default "from" currency to USD
  document.getElementById("from").value = "USD"

  // Set default "to" currency to EUR
  document.getElementById("to").value = "EUR"

  // Focus on amount input
  document.getElementById("amount").focus()
}

