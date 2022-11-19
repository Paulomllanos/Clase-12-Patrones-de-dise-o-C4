import { suma, resta, multiplicacion, division } from "./Funcionalidad.js";

function calculadoraText(){
    let operacion = prompt("1: Sumar, 2: Restar, 3: Dividir, 4: Multiplicar")

    if(operacion == 1) {
        let num1 = prompt("Primer número para sumar");
        let num2 = prompt("Segundo número para sumar");
        let resultado = suma(num1,num2);
        alert(`Tu resultado es: ${resultado}`);
    }

    else if (operacion == 2) {
        let num1 = prompt("Primer número para restar");
        let num2 = prompt("Segundo número para restar");
        let resultado = resta(num1,num2);
        alert(`Tu resultado es: ${resultado}`);
    }
    
    else if (operacion == 3) {
        let num1 = prompt("Primer número para dividir");
        let num2 = prompt("Segundo número para dividir");
        let resultado = division(num1,num2);
        alert(`Tu resultado es: ${resultado}`);
    }
    
    else if (operacion == 4) {
        let num1 = prompt("Primer número para multiplicar");
        let num2 = prompt("Segundo número para multiplicar");
        let resultado = multiplicacion(num1,num2);
        alert(`Tu resultado es: ${resultado}`);
    }
}

export {calculadoraText};