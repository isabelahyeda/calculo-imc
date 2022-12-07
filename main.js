function valorPeso() {
	return (parseFloat (document.getElementById('peso').value) || 0)
}

function valorAltura() {
	let altura = (parseFloat(document.getElementById('altura').value) || 0)

	if (!Number.isInteger(altura)) {
		altura *= 100
		return altura
	} else {
		return altura
	}
}

function calcular() {

	const resultado = document.getElementById('resultado')

	if (valorPeso() == '' || valorAltura() == '') {
		resultado.textContent = 'Por favor, informe todos os campos acima.'
		return
	}

	const altura = valorAltura() / 100

	const imc = (valorPeso() / Math.pow(altura,2)).toFixed(2)

	if(imc < 16) {
    		resultado.textContent = `Seu IMC é ${imc}, sendo classificado como: Magreza grau III.`
    	} else if(imc >= 16 && imc < 17) {
        	resultado.textContent = `Seu IMC é ${imc}, sendo classificado como: Magreza grau II.`
    	} else if(imc >= 17 && imc < 18.50){
        	resultado.textContent = `Seu IMC é ${imc}, sendo classificado como: Magreza grau I.`
    	} else if(imc >= 18.50 && imc < 25){
        	resultado.textContent = `Seu IMC é ${imc}, sendo classificado como: Peso adequado.`
    	} else if(imc >= 25 && imc < 30) {
        	resultado.textContent = `Seu IMC é ${imc}, sendo classificado como: Sobrepeso.`
    	} else if(imc >= 30 && imc < 35) {
        	resultado.textContent = `Seu IMC é ${imc}, sendo classificado como: Obesidade grau I.`
    	} else if(imc >= 35 && imc < 40) {
        	resultado.textContent = `Seu IMC é ${imc}, sendo classificado como: Obesidade grau II.`
    	} else {
        	resultado.textContent = `Seu IMC é ${imc}, sendo classificado como: Obesidade grau III.`
   	}
}

function limpar() {
	document.getElementById('peso').value=''
	document.getElementById('altura').value=''
	document.getElementById('resultado').value= resultado.textContent = ''
}

function abrirPagina() {
	janela = window.open('https://www.linkedin.com/in/isabelahyeda/')
}
