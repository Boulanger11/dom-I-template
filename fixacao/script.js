const paragrafo = document.getElementById(`paragrafo`)
console.log(paragrafo.innerHTML)

const texto = document.getElementById(`texto`)
console.log(texto.valor)

const clique = () => {
    paragrafo.innerHTML = texto.value
}

const imprimir = () => {
    console.log(texto.value)
}
console.log(texto.value)