let container = document.getElementById("seccion");
let usuarios = [];

const agregarUsuario=()=>{
    let datos = document.querySelectorAll("input"); //voy recibiendo todos los datos que se van ingresando
  
   
   
   
    let usuario= { //todo esto es un objeto
        nombre:datos[0].value,
        apellido:datos[1].value,
        correo:datos[2].value,
        cantidad:datos[3].value,
        e:document.getElementById("valor").selectedIndex,
         
              
    };
    let valor=0;
    let can=usuario.cantidad;
    let a=usuario.e;
    console.log(usuario);
    let resultado=0;
    descuento="";
    
    if(a==0){
        resultado = can * (200*.20);
        
    }else{
        if(a==1){
            resultado = can * (200*.50);
            

        }else{
            resultado = can * (200*.85);
            
        }
        

    }   
    console.log(resultado);
    valor=resultado;

    container.innerHTML=`
        <div class="container">
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                    <div class="card-group">
                        <div class="card">
                            <div class="card-body border border-primary m-2">
                                <h5 class="card-title text-center">Estudiante</h5>
                                <p class="card-text text-center">Tienen un descuento</p>
                                <p class="card-title text-center font-weight-bold">80%</p>
                                <p class="card-text text-center">
                                    <small class="text-muted">
                                        * presentar documentación
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                        <div class="card-body border border-primary m-2">
                            <h5 class="card-title text-center">Trainee</h5>
                            <p class="card-text text-center">Tienen un descuento</p>
                            <p class="card-title text-center font-weight-bold">50%</p>
                            <p class="card-text text-center">
                                <small class="text-muted">
                                    * presentar documentación
                                </small>
                            </p>
                        </div>
                    </div>
                    <div class="card">
                    <div class="card-body border border-warning m-2">
                        <h5 class="card-title text-center">Junior</h5>
                        <p class="card-text text-center">Tienen un descuento</p>
                        <p class="card-title text-center font-weight-bold">15%</p>
                        <p class="card-text text-center">
                            <small class="text-muted">
                                * presentar documentación
                            </small>
                        </p>
                    </div>
                </div>
                    </div>
                </div>            
            </div>
            <div class="row">
                <div class="col text-uppercase text-center">
                    <small>venta</small>
               <h2> Valor de ticket $200</h2>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                    <form>
                        <div class="form-row">
                            <div class="d-flex mb-3 ">
                                <div class="form-group col-6 col-md-6 m-1">
                                    <input type="text" class="form-control" placeholder="Nombre" value="${usuario.nombre}"/>
                                </div>
                                <div class="form-group col-6 col-md-6 m-1">
                                    <input type="text" class="form-control" placeholder="Apellido" value="${usuario.apellido}"/>
                                </div>
                            </div>
                            <div class="form-group col-12 col-md-12 m-1">
                                <input type="email" class="form-control" id="espacio2" placeholder="Correo" value="${usuario.correo}"/> 
                            </div>
                            <div class="d-flex mb-2">
                                <div class="form-group col-6 col-md-6 m-1">
                                    <label for="">Cantidad</label>
                                    <input id="cantidadEntradas" type="text" class="form-control" placeholder="Cantidad" value="${usuario.cantidad}"/>
                                </div>
                                <div class="form-group col-6 col-md-6 m-1">
                                <label for="">Categoría</label>
                                <select class="form-select" id="valor">
                                    <option value="estudiante">Estudiante</option>
                                    <option value="trainee">Trainee</option>
                                    <option value="junior">Junior</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-row mb-2">
                            <div class="alert alert-primary" role="alert" id="espacio1">
                                Cantidad a pagar: $  ${valor}
                                
                            </div>
                        </div>
                        <div class="form-row d-flex mb-2">
                       
                            <button type="button" id="limpiar" class="btn btn-lg  col-6 m-1">Borrar</button>
                                             
                            <button type="button" id="btn" class="btn btn-lg  col-6 m-1" >Resumen</button>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById("limpiar").addEventListener('click',comprarTicket);
};



const comprarTicket=()=>{
    container.innerHTML=`
        <div class="container">
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                    <div class="card-group">
                        <div class="card">
                            <div class="card-body border border-primary m-2">
                                <h5 class="card-title text-center">Estudiante</h5>
                                <p class="card-text text-center">Tienen un descuento</p>
                                <p class="card-title text-center font-weight-bold">80%</p>
                                <p class="card-text text-center">
                                    <small class="text-muted">
                                        * presentar documentación
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                        <div class="card-body border border-primary m-2">
                            <h5 class="card-title text-center">Trainee</h5>
                            <p class="card-text text-center">Tienen un descuento</p>
                            <p class="card-title text-center font-weight-bold">50%</p>
                            <p class="card-text text-center">
                                <small class="text-muted">
                                    * presentar documentación
                                </small>
                            </p>
                        </div>
                    </div>
                    <div class="card">
                    <div class="card-body border border-warning m-2">
                        <h5 class="card-title text-center">Junior</h5>
                        <p class="card-text text-center">Tienen un descuento</p>
                        <p class="card-title text-center font-weight-bold">15%</p>
                        <p class="card-text text-center">
                            <small class="text-muted">
                                * presentar documentación
                            </small>
                        </p>
                    </div>
                </div>
                    </div>
                </div>            
            </div>
            <div class="row">
                <div class="col text-uppercase text-center">
                    <small>venta</small>
               <h2> Valor de ticket $200</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-10 offset-md-2 col-lg-8 offset-lg-2 pt-2">
                    <form>
                        <div class="form-row">
                            <div class="d-flex mb-3 ">
                                <div class="form-group col-6 col-md-6 m-1 ">
                                    <input type="text" class="form-control" placeholder="Nombre"/>
                                </div>
                                <div class="form-group col-6 col-md-6 m-1">
                                    <input type="text" class="form-control" placeholder="Apellido"/>
                                </div>
                            </div>
                            <div class="form-group col-12 col-md-12 m-1" >
                                <input type="email"  class="form-control" id="espacio2" placeholder="Correo"/> 
                            </div>
                            <div class="d-flex mb-2">
                                <div class="form-group col-6 col-md-6 m-1">
                                    <label for="">Cantidad</label>
                                    <input id="cantidadEntradas" type="text" class="form-control" placeholder="Cantidad"/>
                                </div>
                                <div class="form-group col-6 col-md-6 m-1">
                                <label for="">Categoría</label>
                                <select class="form-select" id="valor">
                                    <option value="estudiante">Estudiante</option>
                                    <option value="trainee">Trainee</option>
                                    <option value="junior">Junior</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-row mb-2">
                            <div class="alert alert-primary" role="alert" id="espacio1">
                                Cantidad a pagar: $
                                
                            </div>
                        </div>
                        <div class="form-row d-flex mb-2">
                       
                            <button type="button" id="limpiar" class="btn btn-lg  col-6 m-1">Borrar</button>
                                             
                            <button type="button" id="btn" class="btn btn-lg  col-6 m-1" >Resumen</button>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    document.getElementById("btn").addEventListener('click',agregarUsuario);
    
   
}; 