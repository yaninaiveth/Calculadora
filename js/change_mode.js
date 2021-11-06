var available_op = ['sumar','restar','multiplicar','dividir', 'igual']
var new_ops = ['sen','cos','arcos','arcosen','tangente']

var MODE_COLOR = ''

var colorMode = color => {
	if(color === 'red'){
		MODE_COLOR = 'red'
	}else if(color === 'blue'){
		MODE_COLOR = 'blue'
	}else{
		return `That color mode is not available`
	}
}

var changeMode = e => {
	var operators = [...document.getElementsByClassName('operador')]
	var i = 0

	operators.forEach(btn => {
	
		if(available_op.includes(btn.value)){

			btn.value = new_ops[i]
			btn.innerHTML = new_ops[i]
			i++
		}		
	})
}


var MODE = document.getElementById('mode_red').addEventListener('click', _ => colorMode('red'))
var MODE = document.getElementById('blue_red').addEventListener('click', _ => colorMode('blue'))

var change = document.getElementById('change')
change.addEventListener('click', changeMode)