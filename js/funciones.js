let contador = 0;
let secuenciaMostrar;
let largo;
let numeroMayor = 0;

function esPar() {
  let numero = document.getElementById('semilla').value;
  let secuencia = [numero];
  console.log(secuencia[0]);

  if (numero == 0 || numero >= 10000) {
    console.error("El numero no puede ser 0 o mayor a 10000.");
    return;
  }
  const iteracionesMaximas = 1000; 
  while (secuencia[contador] > 1 && contador < iteracionesMaximas) {
    if (secuencia[contador] > numeroMayor){
        numeroMayor = secuencia[contador]
    }
    if (secuencia[contador] % 2 === 0) {
      secuencia.push(secuencia[contador] / 2);
      contador++;
    } else {
      secuencia.push((secuencia[contador] * 3) + 1);
      contador++;
    }
  }

  secuenciaMostrar = secuencia;
  largo = secuencia.length;
}

function salida(){
  console.log(secuenciaMostrar)
  console.log("El largo de la secuencia es: " + largo)
  console.log("El numero mayor es: " + numeroMayor)
}



