const btnConvert = document.querySelector('.button')
const inputValue = document.querySelector('.input')
const convertTo = document.querySelector('.convert-to')
/*  const valueConvert = document.querySelector('h3')*/


async function conversion() {

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,JPY-BRL").then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high;
    const libraToday = data.GBPBRL.high;
    const yenToday = data.JPYBRL.high;
    const btcToday = data.BTCBRL.high;



    if (convertTo.value == 'dolar') {
        valueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue.value / dolarToday)
    }

    if (convertTo.value == 'euro') {
        valueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue.value / euroToday)
    }

    if (convertTo.value == 'libra') {
        valueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputValue.value / libraToday)
    }

    if (convertTo.value == 'yen') {
        valueConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY",
        }).format(inputValue.value / yenToday)
    }

    if (convertTo.value == 'btc') {
        valueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
        }).format(inputValue.value / btcToday)
    }
}

btnConvert.addEventListener("click", conversion)
convertTo.addEventListener("change", conversion)

