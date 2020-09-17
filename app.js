const { argv } = require('./config/yargs')
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then(resultado => console.log(colors.red(resultado)))
            .catch(err => console.log(err));
        break;

    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;

}