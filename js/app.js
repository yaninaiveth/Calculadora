// Declaración de constantes

const valorAnterior = document.getElementById("anterior");

const valorActual = document.getElementById("actual");

const botNum = document.querySelectorAll(".numero");

const botOp = document.querySelectorAll(".operador");

const botDel = document.getElementsByClassName("del");

let valAct = document.getElementById("actual").value;

// Declaración de variables

let numeros = [];
let nums_availables = [0,1,2,3,4,5,6,7,8,9]
let  cadena = "";


//Declaración de funciones

// Guarda los números en un arreglo

function guardaNum(num){ 
    if(nums_availables.includes(num)){
       var str_num = num.toString()
       valorActual.textContent = valorActual.textContent + str_num;
       numeros.push(str_num);
    }else if(num === "."){
       numeros.push(num);
    }else {
       return "There is an error, that must be handled"
    }
}

// Verifica que no haya más de un punto, si hay más se muestra mensaje de error

function punto(tno, pos){

    let cont = 0;
    let err = `Error de sintaxis`

    for(let i = 0; i < tno.length; i++){

        if(tno[i] === "."){

            cont++;

            if(cont > 1){
                valorActual.textContent = err;
                return err;
            }

            if(pos != -1){
                valorActual.textContent = err;
                return err;
            }
        }
    }  
}

// Verifica que no haya operadores sucesivos

function verifica(){
    //Aca se podria hacer un switch para la comparacion con cada caracter
    for( let i = 0; i < cadena.length; i++){

        for( let j = i + 1; j < cadena.length; j++){

            if((cadena[i] === cadena[j])){

                if (((cadena[i] === "/") || (cadena[i] === "*") || (cadena[i] === "+") || (cadena[i] === "-") || (cadena[i] === "."))){
                    valorActual.textContent = `Error de sintaxis`;
                }
            }

            if((cadena[i] === "+") && (cadena[j] === "/")){
                valorActual.textContent = `Error de sintaxis`;
            }

            if((cadena[i] === "-") && (cadena[j] === "/")){
                valorActual.textContent = `Error de sintaxis`;
            }

            if((cadena[i] === "+") && (cadena[j] === "*")){
                valorActual.textContent = `Error de sintaxis`;
            }

            if((cadena[i] === "-") && (cadena[j] === "*")){
                valorActual.textContent = `Error de sintaxis`;
            }

            if((cadena[i] === "*") && (cadena[j] === "/")){
                valorActual.textContent = `Error de sintaxis`;
            }

            if((cadena[i] === "/") && (cadena[j] === "*")){
                valorActual.textContent = "Error de sintaxis";
            }

            if((cadena[i] == "/") && (cadena[j] == "/")){
                valorActual.textContent = `Error de sintaxis`;
            }

            if(cadena[0] === "/"){
                valorActual.textContent = `Error de sintaxis`;
            }

            if(cadena[0] === "*"){
                valorActual.textContent = `Error de sintaxis`;
            }
        }
    }
}


function convierteEnCadena(arreglo){

    cadena = "" // Inicializo cadena para no arrastrar el valor anterior 

    for(i = 0; i < arreglo.length; i++){
        cadena = cadena + arreglo[i];
    }

    return cadena;
}


// Función del botón del 

function eliminaUltimo(){

    numeros = numeros.slice(0,-1);

    convierteEnCadena(numeros);

    valorActual.textContent = cadena;
}


function resetea(){

    numeros = [];
    cadena = "";

    valorActual.textContent = "";
    valorAnterior.textContent = "";
}


function opera(){
    
    verifica();

    let posicionOperadorAnterior = 0;
    let posicionOperadorPosterior;
    
    let termino = [];
    let operacion = "";

    for(let i = 0; i <= numeros.length; i++){

        if ((numeros[i] === "+") || (numeros[i] === "-") || (numeros[i] === "=") || (numeros[i] === "/") || (numeros[i] === "*")){
            
            posicionOperadorPosterior = i;
            console.log(posicionOperadorPosterior);

            termino = numeros.slice(posicionOperadorAnterior, posicionOperadorPosterior);

            posicionOperadorAnterior = posicionOperadorPosterior + 1;

            console.log(termino);

            punto(termino); // Envío el término separado para verificar que no haya más de un punto

        }
    }

    for(let j = 0; j < numeros.length-1; j++){

        operacion = operacion + numeros[j];
    }

    let resultado = eval(String(operacion));

    valorActual.textContent = resultado;
    numeros = [];
    cadena = "";
    numeros.push(String(resultado));
}


function concatenaOperadores(op){

    switch(op){

        case "sumar":
            valorActual.textContent = valorActual.textContent + "+";
            numeros.push("+");
            convierteEnCadena(numeros);
        break;

        case "restar":
            valorActual.textContent = valorActual.textContent + "-";
            numeros.push("-");
            convierteEnCadena(numeros);
        break;

        case "dividir":
            valorActual.textContent = valorActual.textContent + "/";
            numeros.push("/");
            convierteEnCadena(numeros);
        break;

        case "multiplicar":
            valorActual.textContent = valorActual.textContent + "*";
            numeros.push("*");
            convierteEnCadena(numeros);
        break;

        case "igual":
            valorActual.textContent = valorActual.textContent + "=";
            numeros.push("=");
            convierteEnCadena(numeros);
            valorAnterior.textContent = cadena;
            opera();
        break;
    }
}

// Evento de los botones números

botNum.forEach(boton =>{
    boton.addEventListener("click", () => {
        guardaNum(boton.value);
    });
});


//Evento de los operadores

botOp.forEach(boton =>{
    boton.addEventListener("click", () => {
        concatenaOperadores(boton.value);
    });
});
