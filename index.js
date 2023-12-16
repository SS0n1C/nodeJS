let con = require("currency-converter-lt")
let Convector = new con({from:"USD", to:"UAH", amount:100})
Convector.convert().then((res) => {
    console.log(`Resuly: ${res}`)
})