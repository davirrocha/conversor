const btnConvert = document.querySelector('.button')
const convertTo = document.querySelector('.convert-to')
/*  const valueConvert = document.querySelector('h3')*/


async function conversion() {
    const inputValue = document.querySelector('.input').value
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
        }).format(inputValue / dolarToday)
    }

    if (convertTo.value == 'euro') {
        valueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue / euroToday)
    }

    if (convertTo.value == 'libra') {
        valueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputValue / libraToday)
    }

    if (convertTo.value == 'yen') {
        valueConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY",
        }).format(inputValue / yenToday)
    }

    if (convertTo.value == 'btc') {
        valueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
        }).format(inputValue / btcToday)
    }
}


btnConvert.addEventListener("click", conversion)
convertTo.addEventListener("change", conversion)

