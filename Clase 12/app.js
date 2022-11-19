//* Patrones de diseño(PPT)
//* Ciclo de vida(PPT)
//*Import y export con ECS6

//?calculadora en js

//! Ejecicio 1

import { users } from "./bdejercicio1.js";

function buscarUsuario(name){
    const info = users.find((x) => x.name === name);
    console.log(info)
    if(info === undefined) {
        throw new Error ('Usuario No existe!')
    } else if (info === info && info.phone === undefined) {
        throw new Error('Usuario sin numero telefonico!')
    }
}

try {
    buscarUsuario("David");
} catch (error) {
    console.log(error.message)
}

//* Git colaborativo
//? Crear ramas , unir ramas, subir el proyecto, traer el proyecto  con pull sin tener problema

//1) Invitar colaboradores( les llega un correo o ennotificaciones de github para aceptar)
// 2) Deben clonar el proyecto donde dice code, copiar la url (git clone url)
// 3) crear una branch nueva (git branch nombre de la rama)
// 4) cambiar de rama(git Checkout)
// 5) para ver las ramas(git branch)
// 6) hacer add. commit y push origin nameRama
// 7) El lider del equipo hacer los respectivos merge cuando todos esten listos(vuelve a la rama master)
// 8) git fetch(Ve si hubo cambios en la repo)
// 9) git merge origin/nameRama
// 10) git pull origin master en cada integrante del equipo para traese lo actual, el jefe de equipo despues se ubica en su rama y hace lo mismo
/* git branch = ver todas las ramas

esto se hace en el momento del merge a master
git fetch = ve los cambios  que hubo en el repositorio

si hay conflictos en el merge , revisar que no hay nada que se sobreescriba
y borrar lo que añade git, despeus hacer add, commit y push origin master

luego los otras personas que no tengan el proyecto actualizado debe
utilizar git pull orgin master
hay que hacer un pull a cada rama que no tenga los datos actuales
del master */
//*Break 
//*Chart js
//en su carpeta graficos construidos
//!Ejercicio 2
const array = [1,2,3,4,5,6,7,8,9,10]

const arrayReducido = array.slice(0, 3)

console.log(arrayReducido)
//*scrum


