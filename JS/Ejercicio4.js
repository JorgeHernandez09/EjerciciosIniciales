
/*

Dado los siguientes códigos, refactorízalos como consideres, si consideras que está bien, explica el motivo.

Primer código
Tenemos una función que saca el nombre completo del usuario con el nombre y apellido
*/

const user= {
  name: "Pedro",
  surname: "Sánchez",
  age: 45,
  profesion: "Barro man",
};


function userName(user) {
  return "Me llamo " + user.name + " " + user.surname;
}

console.log(userName(user));


/*
Segundo código
Tenemos una función que calcula el salario anual y el nombre del usuario
*/
const user1 = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData(user1) {
  const annualSalary = user.salary * 12;
  const fullName = `${user1.name} ${user1.last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(user1));
/*
En este caso considero que esta bien ya que todos los nombres estan en ingles, el objeto es declarado con la variable const y el codigo no se repite innecesariamente 



Tercer código
Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de 2000€
*/

const user2 = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function isForeign(user2) {
  if ((user2.nationality != "España") && (user2.age == 30)){
      return "Apto para la ayuda del gobierno";
  } else {
    return "No es apto para la ayuda del gobierno";
  }
}

console.log(isForeign(user2));
