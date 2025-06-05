const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

function convertCurrency() {
    // Get values from the form
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;
    
    // Convert amount to number
    const amountNum = Number(amount);
    
    // Calculate conversion
    const convertedAmount = (amountNum * currencies[toCurrency]) / currencies[fromCurrency];
    
    // Display result
    const result = `${amountNum} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    document.getElementById('result').textContent = result;
}
