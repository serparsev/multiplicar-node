const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base: ${base} no es un numero`)
            return;
        }

        if (!Number(limite)) {
            reject(`El limite: ${limite} no es un numero`)
            return;
        }

        console.log('========================'.green);
        console.log(`Tabla de ${base}`.green);
        console.log('========================'.green);

        let data = ''

        for (let i = 0; i <= limite; i++) {
            let resultado = base * i;
            data += `${base} x ${i} = ${resultado}\n`

        }

        resolve(data);
    })

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base: ${base} no es un numero`)
            return;
        }

        if (!Number(limite)) {
            reject(`El limite: ${limite} no es un numero`)
            return;
        }

        let data = ''

        for (let i = 0; i <= limite; i++) {
            let resultado = base * i;
            data += `${base} x ${i} = ${resultado}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err)
            else resolve(`tabla-${base}-al-${limite}.txt`.magenta);
        });

    })

}


module.exports = {
    crearArchivo,
    listarTabla
}