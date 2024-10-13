const botão = document.querySelector(".button-convert")


function convertMoeda() {
    const valorDigitado = document.querySelector(".valor-convert").value
    const textReal = document.querySelector(".result-value-real")
    const textDolar = document.querySelector(".result-value-dolar")
    const selectConvert = document.querySelector(".convert-select")
    const alterarImg = document.querySelector("#img-bandeira")

    const dolarAtual = 5.26
    const euroAtual = 4.26

    if(selectConvert.value == "dolar"){
        textReal.innerHTML = valorDigitado
        textDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDigitado / dolarAtual)
    }
    if(selectConvert.value == "euro"){
        alterarImg.src = './img/Design sem nome 3.png'
        textReal.innerHTML = valorDigitado
        textDolar.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDigitado / euroAtual)
    }
}


botão.addEventListener('click', convertMoeda);