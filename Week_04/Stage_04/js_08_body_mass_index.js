/*
  Crie uma lista com os seguintes dados,
  para cada pessoa:

  pessoa:
    - nome;
    - idade;
    - peso (em kg);
    - altura (em cm);

  Escreva uma lista contendo alguns nomes;
*/

const people = [
  {
    name: 'Cupcake',
    age: 22,
    weight: 70,
    height: 180,
  },
  {
    name: 'Dean',
    age: 26,
    weight: 80,
    height: 185,
  },
  {
    name: 'Harry',
    age: 17,
    weight: 70,
    height: 165,
  },
];

// const namesArray = [];
// for (const person of people) {
//   namesArray.push(person.name);
//   console.log(
//     `Nome: ${person.name}, idade: ${person.age}, peso: ${person.weight} kilogramas, altura: ${person.height} centímetros`,
//   );
// }

// BMI => body mass index
function BMI(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

for (const person of people) {
  const { weight, height } = person;
  console.log(`${person.name} possui o IMC de: ${BMI(weight, height)}`);
}
