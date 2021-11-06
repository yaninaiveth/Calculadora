var available_op = ['sumar','restar','multiplicar','dividir', 'igual']
var new_ops = ['sen','cos','arcos','arcosen','tangente']

var mode_color = ''

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

var change = document.getElementById('change')
change.addEventListener('click', changeMode)