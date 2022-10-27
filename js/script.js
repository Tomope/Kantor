let inputMoney = document.querySelector(".js-inputMoney");
let inputCurrency = document.querySelector(".js-inputCurrency");
let outputCurrency = document.querySelector(".js-outputCurrency");
let form = document.querySelector(".js-form");
let showResult = document.querySelector(".js-result");

let factorIn;
let factorOut;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (inputCurrency.value) {
        case "PLN":
            factorIn = 1;
            break;
        case "EUR":
            factorIn = 0.20997701;
            break;
        case "USD":
            factorIn = 0.20893387;
            break;
        case "JPY":
            factorIn = 30.850956;
            break;
        default:
            console.log("Waluta wejściowa nie jest wybrana");
    }

    switch (outputCurrency.value) {
        case "PLN":
            factorOut = 1;
            break;
        case "EUR":
            factorOut = 0.20997701;
            break;
        case "USD":
            factorOut = 0.20893387;
            break;
        case "JPY":
            factorOut = 30.850956;
            console.log("Waluta wyjściowa nie jest wybrana");
    }

    let moneyOut = (inputMoney.value / factorIn) * factorOut;


    showResult.innerText = `${inputMoney.value} ${inputCurrency.value} = ${moneyOut.toFixed(2)} ${outputCurrency.value}`;
})


// 1 PLN = 0.21 usd
// 1 pln = 30.74 yen
// 1 usd = 148,54 yen
