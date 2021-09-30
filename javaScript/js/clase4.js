let elemento= document.getElementById("principal") //capturamos el div

let btn=document.getElementById("btn") //capturo el boton
//btn.addEventListener('click',inicio)

//function inicio(){alert("estamos llamando a la funcion")}

window.addEventListener('load', function(){  //usamos evento load renderizamos el formulario  
  elemento.innerHTML=
  `<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="button" id="btn" class="btn btn-primary" onclick="entrar()">Entrar</button>
</form>`
})

//recarga la pagina luego de colocar el mail y password si  en el form en el button el type es "submit", si coloco type "button" queda en la pagina y no recarga
let usuario={    //objeto
    email:"mlauragullo@yahoo.com.ar",  //propiedades
    pass: "123456",
    validar:(e, p )=>{  //metodo
        if (e===usuario.email && p===usuario.pass){
            return true;
        }else{
            return false
        }
    }
}
function entrar(){
    //ev.preventDefault();
    let email = document.getElementById("exampleInputEmail1"); 
    let pass = document.getElementById("exampleInputPassword1");
   
    let entra=usuario.validar(email, pass)
    alert(entra)
    if (entra){
        elemento.innerHTML=`
            <h1>Bienvenido ${email}</h1> ` //para llamar a la funcion ${email} concatena. Es lo mismo que hacer "bienvenido "+email
    }    
 }