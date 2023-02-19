const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        let salida = "";
        let consola = '';
        for (let i = 1; i <= hasta; i++) {

            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        // fs.writeFileSync( `tabla-${base}.txt`,salida, (err) => {
        //     if(err) throw err;

        //     console.log(`Tabla del ${base} creada`);
        // })
        console.log("listar :", listar);

        if (listar) {
            console.log( " =================================\n".green);
            console.log( `Tabla del ${colors.blue(base)}\n`.green);
            console.log( " =================================\n".green);
            console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        return err;
    }

}

module.exports = {
    crearArchivo
}