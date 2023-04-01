import { Persona } from './persona';
import { Direccion} from './direccion';
import { Telefono }  from './telefono';
import { Mail } from './mail';


var persona1 = new Persona('Tania','Salgado',22,'03996905D',new Date(2000, 9, 22),'azul','femenino',[new Direccion('calle severo ochoa',1,2,'A','28900','mostoles','madrid')],[new Mail('correo','tania123@gmail.com')],[new Telefono('movil','666666666')],'hola buenos dias');
var persona2 = new Persona('Alex','Fernandez',33,'07164551Y',new Date(1991, 10, 19),'amarillo','masculino',[new Direccion('calle joaquin munezar',1,3,'B','28955','fuenlabrada','madrid')],[new Mail('correo','alexfernan@gmail.com')],[new Telefono('casa','555555555')],'me gustan los macarrones');
var persona3 = new Persona('Blanca','Sueca',24,'13557725B',new Date(1998, 4, 21),'rosa','femenino',[new Direccion('calle miraflor',2,2,'C','28999','getafe','madrid')],[new Mail('trabajo','blancasu1@gmail.com')],[new Telefono('trabajo','444444444')],'mi perro se llama nieve');
console.log(persona1,persona2,persona3);

function modificarPersonaPorDNI(dni: string, nuevaDireccion: Direccion[], nuevoMail: Mail[], nuevoTelefono: Telefono[]): void {
    const personas: Persona[] = [persona1, persona2, persona3]; 
  
    
    const personaEncontrada = personas.find(persona => persona.dni === dni);
  
    if (personaEncontrada) {
      
      personaEncontrada.direcciones = nuevaDireccion;
      personaEncontrada.mails = nuevoMail;
      personaEncontrada.telefonos = nuevoTelefono;
  
      console.log('Se han modificado los datos de la persona:', personaEncontrada);
    } else {
      console.log('No se ha encontrado ninguna persona con el DNI especificado.');
    }
  }

modificarPersonaPorDNI('03996905D', [new Direccion('calle jacinto', 10, 1, 'B', '28001', 'Madrid', 'Madrid')], [new Mail('trabajo', 'taniasalgado@empresa.com')], [new Telefono('movil', '678901234')])
  
