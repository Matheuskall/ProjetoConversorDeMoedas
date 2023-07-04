const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-type")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor a ser convertido em real
    const currencyValueConverted = document.querySelector(".currency-value") //outras moedas




    const dolarToday = 5.2
    const euroToday = 6.2


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)
    }






    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyImage.src = './assets/EUA.png'
        currencyName.innerHTML = "Dólar americano"

    }
    if (currencySelect.value == "euro") {
        currencyImage.src = './assets/euro.png'
        currencyName.innerHTML = "Euro"
    }

    convertValues()
}




currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)