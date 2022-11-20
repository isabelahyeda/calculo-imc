function valorPeso() {
	let peso = document.getElementById('peso').value
	peso = parseFloat(peso)
	
	return peso
}

function valorAltura() {
	let altura = document.getElementById('altura').value
	altura = parseFloat(altura)

	return altura
}

function calcular() {

	let resultado = document.getElementById('resultado')

	if (!Number.isInteger(valorAltura())) {
		resultado.innerHTML = 'Por favor, digite a altura em centímetros, não use ponto ou vírgula.'
		return
	}

	let altura = valorAltura() / 100

	let imc = valorPeso() / Math.pow(altura,2)

	imc = imc.toFixed(2)

	if(imc < 16) {
    	resultado.innerHTML = 'Seu IMC é ' + imc + ' , sendo classificado como: Magreza grau III.'
    	} else if(imc >= 16 && imc < 17) {
           resultado.innerHTML = 'Seu IMC é ' + imc + ' , sendo classificado como: Magreza grau II.'
    	} else if(imc >= 17 && imc < 18.50){
            resultado.innerHTML = 'Seu IMC é ' + imc + ' , sendo classificado como: Magreza grau I.'
    	} else if(imc >= 18.50 && imc < 25){
            resultado.innerHTML = 'Seu IMC é ' + imc + ' , sendo classificado como: Peso adequado.'
   	} else if(imc >= 25 && imc < 30) {
            resultado.innerHTML = 'Seu IMC é ' + imc + ' , sendo classificado como: Sobrepeso.'
    	} else if(imc >= 30 && imc < 35) {
            resultado.innerHTML = 'Seu IMC é ' + imc + ' , sendo classificado como: Obesidade grau I.'
    	} else if(imc >= 35 && imc < 40) {
            resultado.innerHTML = 'Seu IMC é ' + imc + ' , sendo classificado como: Obesidade grau II.'
    	} else {
            resultado.innerHTML = 'Seu IMC é ' + imc + ' , sendo classificado como: Obesidade grau III.'
   	}
}

function limpar() {
	document.getElementById('peso').value=''
	document.getElementById('altura').value=''
	document.getElementById('resultado').value= resultado.innerHTML = ''
}

function abrirPagina() {
	janela = window.open('https://www.linkedin.com/in/isabelahyeda/')
}
