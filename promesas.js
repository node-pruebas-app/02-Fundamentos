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

let getEmpleado = (id)=>{
  return new Promise((resolve, reject)=>{
    let empleadoDB = empleados.find(empleado =>
      empleado.id === id);
      if(!empleadoDB){
        reject(`No existe el empleado con el ID: ${id}`);
      }else{
        resolve(empleadoDB);
      }
  });
}

let getSalario = (empleado)=>{
  return new Promise((resolve, reject)=>{
    let salarioDB = salarios.find( salario =>salario.id === empleado.id);
    if(!salarioDB){
      reject(`No se encontro un salario para el empleado ${empleado.nombre}`);
    }else{
      resolve({nombre:empleado.nombre,
      salario:salarioDB.salario,id:empleado.id});
    }
  });
}
// getEmpleado(1).then(empleado => {
//   console.log('Empleado de Base de datos: ',empleado);
//   getSalario(empleado).then(salario =>{
//     console.log(salario);
//   },(err)=>{console.log(err);});
// },(err)=>{console.log(err);});

getEmpleado(3).then(empleado => {
  console.log('Empleado de Base de datos: ',empleado);
  return getSalario(empleado);

})
.then( resp =>{
  console.log(resp);
})
.catch((err)=>{console.log(err);});
