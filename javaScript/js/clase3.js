//let nombre = prompt("Ingresar nombre")
let miDiv= document.getElementById("principal")
//miDiv.innerHTML="Hola"+nombre

let btn=document.getElementById("btn")
btn.addEventListener('click', sumar);

function sumar(){
    let num =Number (prompt("ingresar primer numero"))
    let num2= Number (prompt("inresar segundo numero")) 
    let op= prompt("escribir operacion a realizar: \n + suma \n - resta \n * multiplicacion \n / division")
    let resultado=0;
    switch (op) {
        case "+":
            resultado = num + num2;
            miDiv.innerHTML +="<p> El resultado de la suma de "+num +" y "+num2+ " es: " + resultado + "</p>";
            break;
        case "-":
            resultado = num - num2;
            miDiv.innerHTML +="<p> El resultado de la resta de "+num +" y "+num2+ " es: " + resultado + "</p>";
            break;
        case "/":
            resultado = num / num2;
            miDiv.innerHTML +="<p> El resultado de la División de "+num +" y "+num2+ " es: " + resultado + "</p>";
 
        default:
            break;
    }
 
}