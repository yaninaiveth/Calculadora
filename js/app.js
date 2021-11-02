// Declaración de constantes

const valorAnterior = document.getElementById("anterior");

const valorActual = document.getElementById("actual");

const botNum = document.querySelectorAll(".numero");

const botOp = document.querySelectorAll(".operador");

const botDel = document.getElementsByClassName("del");

let valAct = document.getElementById("actual").value;

// Declaración de variables

let numeros = [];

let  cadena = "";


//Declaración de funciones

// Guarda los números en un arreglo

function guardaNum(num){ 

    switch (num){

        case ".":
            valorActual.textContent = valorActual.textContent + ".";
            numeros.push(".");
        break;

        case "0": 
            valorActual.textContent = valorActual.textContent + "0";
            numeros.push("0");
        break;

        case "1": 
            valorActual.textContent = valorActual.textContent + "1";
            numeros.push("1");
        break;

        case "2": 
            valorActual.textContent = valorActual.textContent + "2";
            numeros.push("2");
        break;

        case "3": 
            valorActual.textContent = valorActual.textContent + "3";
            numeros.push("3");
        break;

        case "4": 
            valorActual.textContent = valorActual.textContent + "4";
            numeros.push("4");
        break;

        case "5": 
            valorActual.textContent = valorActual.textContent + "5";
            numeros.push("5");
        break;

        case "6": 
            valorActual.textContent = valorActual.textContent + "6";
            numeros.push("6");
        break;

        case "7": 
            valorActual.textContent = valorActual.textContent + "7";
            numeros.push("7");
        break;

        case "8": 
            valorActual.textContent = valorActual.textContent + "8";
            numeros.push("8");
        break;

        case "9": 
            valorActual.textContent = valorActual.textContent + "9";
            numeros.push("9");
        break;
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
