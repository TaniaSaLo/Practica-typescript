"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
var persona1 = new persona_1.Persona('Tania', 'Salgado', 22, '03996905D', new Date(2000, 9, 22), 'azul', 'femenino', [new direccion_1.Direccion('calle severo ochoa', 1, 2, 'A', '28900', 'mostoles', 'madrid')], [new mail_1.Mail('correo', 'tania123@gmail.com')], [new telefono_1.Telefono('movil', '666666666')], 'hola buenos dias');
var persona2 = new persona_1.Persona('Alex', 'Fernandez', 33, '07164551Y', new Date(1991, 10, 19), 'amarillo', 'masculino', [new direccion_1.Direccion('calle joaquin munezar', 1, 3, 'B', '28955', 'fuenlabrada', 'madrid')], [new mail_1.Mail('correo', 'alexfernan@gmail.com')], [new telefono_1.Telefono('casa', '555555555')], 'me gustan los macarrones');
var persona3 = new persona_1.Persona('Blanca', 'Sueca', 24, '13557725B', new Date(1998, 4, 21), 'rosa', 'femenino', [new direccion_1.Direccion('calle miraflor', 2, 2, 'C', '28999', 'getafe', 'madrid')], [new mail_1.Mail('trabajo', 'blancasu1@gmail.com')], [new telefono_1.Telefono('trabajo', '444444444')], 'mi perro se llama nieve');
console.log(persona1, persona2, persona3);
function modificarPersonaPorDNI(dni, nuevaDireccion, nuevoMail, nuevoTelefono) {
    var personas = [persona1, persona2, persona3]; // arreglo de objetos Persona
    // Buscar la persona correspondiente al DNI
    var personaEncontrada = personas.find(function (persona) { return persona.dni === dni; });
    if (personaEncontrada) {
        // Modificar las propiedades de la persona
        personaEncontrada.direcciones = nuevaDireccion;
        personaEncontrada.mails = nuevoMail;
        personaEncontrada.telefonos = nuevoTelefono;
        console.log('Se han modificado los datos de la persona:', personaEncontrada);
    }
    else {
        console.log('No se ha encontrado ninguna persona con el DNI especificado.');
    }
}
// Modificar la información de la persona1
modificarPersonaPorDNI('03996905D', [new direccion_1.Direccion('calle jacinto', 10, 1, 'B', '28001', 'Madrid', 'Madrid')], [new mail_1.Mail('trabajo', 'taniasalgado@empresa.com')], [new telefono_1.Telefono('movil', '678901234')]);
