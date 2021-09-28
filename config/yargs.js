//Configuraciones de yargs con option
const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Es el número limite de la tabla de multiplicar'
        })
        .check((argv, options) =>{
            if( isNaN( argv.b ) ){
                throw 'la base tiene que ser un número';
            }
            if( isNaN( argv.hasta ) ){
                throw 'El límite tiene que ser un número';
            }
            // Si no hay ningún error retorna true
            return true;
        })
        .argv;

module.exports = argv;
