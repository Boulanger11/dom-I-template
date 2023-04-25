//Capturando o elemento HTML
const inputNome = document.getElementById(`nome`)

console.log(inputNome.value)

//Limpando o input
inputNome.value = ``
console.log(inputNome.value)

const inputEndereco = document.getElementById(`endereco`)
inputEndereco.value = ``
console.log(inputEndereco.value)

const inputEmail = document.getElementById(`email`)
inputEmail.value = ``
console.log(inputEmail.value)