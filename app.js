// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

const colors = require('colors');

console.clear();


//console.log( process.argv ); // argumentos que vienen por la consola.

// Con desestructuracion de arreglos obtenemos el tercer parámetro
// const [ , , arg3 ] = process.argv;
// const [ , base ] = arg3.split('=');
// console.log( base );

//console.log( arg3 );
//const base = 5;

//for (let i = 1; i <= 10; i++){
//    salida += `${ base } * ${ i } = ${ base * i }\n`;
//}

//console.log( salida );

//fs.writeFile(`tabla-${ base }.txt`, salida, ( err) =>{
//    if ( err ) throw err;

//    console.log(`tabla-${ base }.txt creado`);
//});

//fs.writeFileSync(`tabla-${ base }.txt`, salida);

//console.log(`tabla-${ base }.txt creado`);

crearArchivo( argv.b, argv.l, argv.hasta )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log( err ));

//Capitlulo 34. Yargs

//console.log( process.argv );

// se imprime también el que se genera de yargs
//console.log( argv );


console.log('base:yargs', argv.b);

