const argv = require('yargs')
                .options('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe : "Es la base de la tabla de multiplicar"
                

                })
                .option('l', {
                    alias: 'listar',
                    default : false,
                    demandOption: false,
                    type: 'boolean',
                    describe : 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias : 'hasta',
                    default : 10,
                    demandOption : false,
                    type : 'number',
                    describe: 'Define hasta que numero va la multiplicacion'
                })
                .check((argv,options) => {
                    console.log('yargs', argv);
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'.red;
                    }
                    if(isNaN(argv.h)){
                        throw 'El valor hasta debe ser nuerico'.red;
                    }
                    return true;
                })
                
                .argv;

module.exports = argv;