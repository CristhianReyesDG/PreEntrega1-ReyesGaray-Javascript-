document.write("<h2>" + "Calculadora de Divisores y Multiplos" +"</h2>")
let contador = 0;
let operacion = prompt("Ingrese si desea buscar Divisores ( D ) o Multiplos ( M )")

switch(operacion){
    case 'D' : 
    //Busqueda de Divisores
    let valor = Number (prompt("Ingrese el Numero que desea Operar"));
    let aux = valor;
    let resto = 0;
    do {
        contador = contador + 1;
        aux = valor / contador;
        resto = valor % contador;
        if (resto == 0){
            document.write("<h2>" + "El Numero : "+ aux +" - Es Divisor" + "</h2>");
        }
    } while (contador < valor )
    break;
    case 'M' :
        //Busqueda de Multiplos  
        let valorM = Number (prompt("Ingrese el Numero que desea Operar"));
        let cantM = Number (prompt("Ingrese la Cantidad de Multiplos que desea"))
        let auxM = Number;
        document.write("<h2>" + "Los " + cantM+" Multiplos de "+ valorM +" son : " + "</h2>");
        do {
            contador = contador + 1 
            auxM = valorM * contador
            document.write("<h2>" + auxM + "</h2>");
        }while (contador != cantM);
        break;
    default:
        document.write("<h2>" + "Error. Por favor ingrese un dato valido (Divisores ( D ) o Multiplos ( M ))" +"</h2>")
}