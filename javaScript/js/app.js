    alert ("hola mundo")
    console.log("estamos en la consola")
    let nombre="Laura"
    var numero= 10
    const PI=3.14
    let hayClase=true
    console.log(numero)
    console.log(numero+25+nombre)
    console.log(hayClase)
    console.log(5>3)
    let esFeriado=false
    var saludar="Hola"
    
    if (5>8){
        console.log("es correcto")
    } else{
        console.log("no es correcto")
    }
   
    console.log (5>3)? "es correcto " : "no es correcto"
    
    if(hayClase==true){
        console.log("me conecto")
    } else{
        console.log("no me conecto")
    }
    
    if (hayClase==true && esFeriado !=true){
        console.log("me conecto")
    }else{
        console.log("no me conecto")
    }

    if(25>12 || 12>50){
        console.log("se cumple una de las condiciones")
    }

    let elemento =document.getElementById("principal")    
    console.log(elemento)
    elemento.innerHTML="<h1> saludar</h1>";
    document.write("<div class='container'><div class='row' id='principal' ")
    document.write()

    let mensaje =prompt("mensaje");
    let mensaje2 =prompt("menu \n  1_papas n\ 2_milanesas")

    switch (mensaje2){
        case "1":
            elemento.innerHTML="<p>Disfruta de  tus papas</p>"
        break
        case "2":
            elemento.innerHTML="<p>Disfruta de tus milanesas</p>"
        break
        default:
            elemento.innerHTML="<p>No es opcion valida</p>"
        break
    }
    let num = parseInt(prompt ("ingrese el primer numero"))
    let num2 = parseInt(prompt ("ingrese segundo numero"))

    let resultado=("<p>resultado de "+num + " + " +num2+" es "+(num+num2))
    elemento.innerHTML=resultado









