var available_op = ['sumar','restar','multiplicar','dividir', 'igual']

var ops_blue = 	['sen','cos','tangente','exp','exe']
var ops_red = 	['arcsen','arcocos', 'arctan', 'ln', 'pot']
var ops_green = ['hyp','dec','hex','bin','oct']

var MODE_COLOR = 'blue'
var COLORS = ['blue','green','red']

var changeMode = e => {
	var operators = [...document.getElementsByClassName('operador')]
	var i = 0

	operators.forEach(btn => {

		if(COLORS.includes(MODE_COLOR)){

			console.log(`${MODE_COLOR} operators`)

			if(MODE_COLOR === 'red'){
				btn.value = ops_red[i]
				btn.innerHTML = ops_red[i]
			}else if (MODE_COLOR === 'blue'){
				btn.value = ops_blue[i]
				btn.innerHTML = ops_blue[i]
			}else if (MODE_COLOR === 'green'){
				btn.value = ops_green[i]
				btn.innerHTML = ops_green[i]
			}else {
				return 'There is an error'
			}
			i++
		}		
	})

	if(document.getElementById('mode_color') === null){
		var ALTERN_MODE_COLOR_BTN = document.createElement('BUTTON')

		ALTERN_MODE_COLOR_BTN.innerHTML = "COLOR"
		ALTERN_MODE_COLOR_BTN.id = 'mode_color'
		ALTERN_MODE_COLOR_BTN.onclick = _ => colorMode()

		document.getElementById('btn_section').appendChild(ALTERN_MODE_COLOR_BTN)
	}

}

var colorMode = _ => {
	if(MODE_COLOR === 'blue'){
		MODE_COLOR = 'red'
	}else if(MODE_COLOR === 'red'){
		MODE_COLOR = 'green'
	}else if(MODE_COLOR === 'green'){
		MODE_COLOR = 'blue'
	}
	else{
		return `It should has an initial color`
	}

	changeMode()
}

var CHANGE = document.getElementById('change')

CHANGE.addEventListener('click', changeMode)
