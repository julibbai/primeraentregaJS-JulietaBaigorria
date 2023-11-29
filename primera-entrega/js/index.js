
function comprarBoleto(){

    //se obtiene la edad y altura de la persona

    let edad = parseInt(prompt("Ingrese su edad"));
    let altura = parseInt(prompt("Ingrese su altura en centímetros"));

    if (isNaN(edad) || isNaN(altura)){
        console.log("Los datos ingresados no son válidos");
        return;
    }


    //le pregunto al usuario la cantidad de boletos que quiere

    let cantidadBoletos = parseInt (prompt("Ingrese la cantidad de boletos que necesita, el valor de un boleto individual es de $500"));

    if(isNaN(cantidadBoletos)) {
        console.log("Por favor, ingresa un número válido");
        return;
    }

    //se ve si la edad y altura cumplen con los requisitos

    if(edad >=7 && altura >= 120){


        for(intento=0;intento<=2;intento++){
            let numeroAdivinar = parseInt(prompt(`Adivina un número del 1 al 10 para obtener un descuento del 20%. Tienes ${3-intento} intentos`));
                if(numeroAdivinar==7){
                    console.log(`¡Adivinaste en el intento ${intento}! El número era 7. Total a pagar: ${cantidadBoletos * 500 * (1 - 0.2)}`);
                    break;
                } else{
                    console.log(`No adivinaste en el intento ${intento}`);
                }
        }
        console.log(`¡Lo sentimos! No pudiste adivinar. El total a pagar sería de ${cantidadBoletos*500}`);

    }
    else{ 
        console.log("Lo sentimos, no cumples con los requisitos para subir a la montaña rusa.");
    }
}


comprarBoleto();