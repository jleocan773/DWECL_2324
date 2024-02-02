// Decoradores

// Modifica constructor de la clase
function decorClase (target:Function):any  {  
    return function(){console.log('Constructor modificado')};
}
// Modifica método de la clase
function decorMetodo(target:any, propName: string, descriptor: PropertyDescriptor = {}){
    descriptor.value=function(){ console.log('Método modificado')}
    return descriptor;  
}
@decorClase
class MiClase {  
    constructor() { 
        console.log('Constructor de clase')
    }
    //@decorMetodo
    get(){console.log('Método de clase')};
}
var dat=new MiClase();
//dat.get();