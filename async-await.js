// let getNombre = async()=>{
//   //undefined.nombre
//   // throw new Error ('No existe un nombre para ese usuario');
//   return  'Hernán';
// };

let getNombre = () =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Hernán');
    },3000);
  })
}
getNombre().then(nombre =>{console.log(nombre);})
.catch(e=>{
  console.log('Error de async',e);
})

let saludo = async()=>{
  let nombre = await getNombre();

  return `Hola ${nombre}`;
}

saludo().then(mensaje =>{
  console.log(mensaje);
})
