var available_op = ['sumar','restar','multiplicar','dividir', 'igual']

var new_ops_blue = ['sen','cos','tangente','exp','raiz']
var new_ops_red = ['arcsen','arcocos', 'arctan', 'ln', 'pot']

var MODE_COLOR = 'blue'

var colorMode = color => {
	if(MODE_COLOR === 'blue'){
		MODE_COLOR = 'red'
	}else if(MODE_COLOR === 'red'){
		MODE_COLOR = 'blue'
	}else{
		return `It should has an initial color`
	}
}

var changeMode = e => {
	var operators = [...document.getElementsByClassName('operador')]
	var i = 0

	operators.forEach(btn => {
	
		if(available_op.includes(btn.value)){

			if(MODE_COLOR === 'red'){
				btn.value = new_ops_red[i]
				btn.innerHTML = new_ops_red[i]
			}else if (MODE_COLOR === 'blue'){
				btn.value = new_ops_blue[i]
				btn.innerHTML = new_ops_blue[i]
			}
			i++
		}		
	})
}


var MODE   = document.getElementById('mode_color')
var CHANGE = document.getElementById('change')

MODE.addEventListener('click', _ => colorMode())
CHANGE.addEventListener('click', changeMode)