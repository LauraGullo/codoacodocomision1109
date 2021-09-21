    // alert ("hola mundo")
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
