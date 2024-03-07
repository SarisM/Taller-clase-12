let numero1 = prompt("Ingresa un numero");
console.log(numero1);
numero1 = parseInt (numero1);
console.log (typeof numero1, numero1);

let numero2 = prompt("Ingresa un numero");
console.log(numero2);
numero2 = parseInt (numero2);
console.log (typeof numero2, numero2);


let numero3 = prompt("Ingresa un numero");
console.log(numero3);
numero3 = parseInt (numero3);
console.log (typeof numero3, numero3);

if (numero1>=numero2 && numero1>=numero3) {
    
console.log(parrafo);
parrafo.innerHTML = "El numero " + numero1 + " es el mayor";
}
else if (numero2>=numero1 && numero2>=numero3) {
    
console.log(parrafo);
parrafo.innerHTML = "El numero " + numero2 + " es el mayor";
}
else {
    
console.log(parrafo);
parrafo.innerHTML = "El numero " + numero3 + " es el mayor";
}
    
    
    