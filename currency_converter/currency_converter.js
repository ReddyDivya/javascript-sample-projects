/*
Project - Currency converter
 --API
 --Exchange Rate - http://data.fixer.io./api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1
 --Countries - https://restcountries.eu/rest/v2/currency/${currencyCode}
1. Installing axios(for fetching the data from the api) using the cmd [npm i --save axios]
*/
const axios = require('axios');
//1st function getExchangeRate

/*
const getExchangeRate = (fromCurrency, toCurrency) => {
    /
        -- Method 1 - Fetching the data using Promise, to resolve some error we need catch block. Code becomes tedious when 
        dealing with multiple callbacks. So, it's much easier to access data with async_await.
    /
        axios.get(`http://data.fixer.io./api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1`).then((response) => {
        const rate = response.data.rates;
        const euro = 1 / rate[fromCurrency];
        const exchangeRate = euro * rate[toCurrency];
       return exchangeRate;
    }).then((data) => {
        console.log("data >> "+ data); //this is the returned value from the first then block
    }).catch(() => {
        console.log('Unable to fetch data from the api.');
    });
}//getExchangeRate
*/

const getExchangeRate = async(fromCurrency, toCurrency) => {
    /*
        -- Method 2 - This is the async_await method of fetching the data. async makes a function returns a Promise.
        await has a power to block the execution until the response is returned from an api.
    */
        const response = await axios.get(`http://data.fixer.io./api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1`);
        const rate = response.data.rates;
        const euro = 1 / rate[fromCurrency];
        const exchangeRate = euro * rate[toCurrency];

        if(isNaN(exchangeRate)){
            throw new Error(`Unable to get currency ${fromCurrency} and ${toCurrency}`)
        }
        return exchangeRate;
}//getExchangeRate

//2nd function - getCountries
const getCountries = async (toCurrency) => {
    //Handling errors using try-catch
    try{
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${toCurrency}`);
        return response.data.map(country => country.name);    
    }
    catch(error){
        throw new Error(`Unable to get countries that use ${toCurrency}`);
    }
}//getCountries

//3rd function - convertCurrency
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    const countries = await getCountries(toCurrency); 
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}.`;
}//convertCurrency

//Call convert currency to get meaningful data
convertCurrency('USD', 'HRK', 30)
     .then((message) => {
         console.log(message);
     }).catch((error) => {
         console.error(error.message);
     })