let empleados = [{
    id:1,
    nombre:'Hernán'
  },{
    id:2,
    nombre:'Melisa'
  },{
    id:3,
    nombre:'Juan'
  }
];
let salarios = [{
    id:1,
    salario: 1000
  },{
    id:2,
    salario: 2000
  }
];

let getEmpleado = (id,callback)=>{
  let empleadoDB = empleados.find(empleado =>
    empleado.id === id);
    if(!empleadoDB){
      console.log(`No existe el empleado con el ID: ${id}`);
    }else{
      callback(null,empleadoDB);
    }
}

let getSalario = (empleado, callback)=>{
  let salarioDB = salarios.find( salario =>salario.id === empleado.id);
  if(!salarioDB){
    console.log(`No se encontro un salario para el empleado ${empleado.nombre}`);
  }else{
    callback(null, {nombre:empleado.nombre,
    salario:salarioDB.salario,id:empleado.id});
  }
}
getEmpleado(1, (err,empleado)=>{
  if(err){
    return console.log(err);
  }
  console.log(empleado);
  getSalario (empleado,(err,salario)=>{
    if(err){
      return console.log(err);
    }
    console.log(salario);
  });
});
