/*Ejercicio 1, typescript: types e intefaces
Crea un objeto bird que tenga los siguientes datos: name, canEat, canDrink, canSleep, canFly
Crea un objero dog que tenga los mismos datos que pájaro, pero que a demás tenga: race, age
Crea los tipos/interfaces necesarios para poder trabajar con estos datos en TypeScript.

Ejercicio 2
Partiendo del ejercicio 1, haz que la raza (race), solo pueda ser Husky, Labrador, Chucho
*/

type Animal = {
    name: string,
    canEat: boolean,
    canDrink: boolean,
    canSleep: boolean
}
interface Bird extends Animal {
    canFly: boolean
}
interface Dog extends Animal {
    race:  "Husky" | "Labrador" | "Chucho"
    age: number
}   
 
/*
Ejercicio 3, Creando más tipos
Partiendo del ejercicio anterior, crea un nuevo objeto llamado cat que solamente tenga name, color, canSleep
Partiendo del ejercicio anterior, crea un nuevo objeto llamado Snake que solamente tenga canEat, canDrink, canSleep
*/

type Cat =  Pick<Animal, "name" | "canSleep"> & {
    color: string    
}   

type Snake = Omit<Animal, "name">

//Objetos creados
const bird: Bird = {name: "Pajaro", canEat: true, canDrink: true, canSleep: true, canFly: true}
const dog: Dog = {name: "Perro", canEat: true, canDrink: true, canSleep: true, race: "Chucho", age: 5}
const cat: Cat = {name: "Gato", color: "Negro", canSleep: true}
const snake: Snake = {canEat: true, canDrink: true, canSleep: true}