/*
  Faça um programa que tenha um menu e apresente a seguinte mensagem:

  'Olá usuário! Digite o número da opção desejada:

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa'

  ---
  O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

  - Caso o usuário digite 1:
    ele poderá cadastrar um item em uma lista;
  - Caso o usuário digite 2:
    ele poderá ver os itens cadastrados;
    se não houver item cadastrado, mostrar a mensagem:
      'Não existem itens cadastrados'
  - Caso o usuário digite 3:
    a aplicação deverá ser encerrada;
*/

let userInput;
let itemsArray = [];

while (userInput !== 3) {
  userInput = Number(
    prompt(`
    Olá usuário! Digite o número da opção desejada:

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `),
  );

  switch (userInput) {
    case 1:
      const item = prompt('Adicione o item desejado:');
      itemsArray.push(item);
      break;
    case 2:
      if (itemsArray.length === 0) {
        alert('Não existem itens cadastrados');
      } else {
        alert(itemsArray);
        console.log(itemsArray);
      }
      break;
    case 3:
      alert('Saindo do programa');
      break;
    default:
      alert('Opção inválida. Tente novamente');
  }
}

// while (userInput !== 3) {
//   userInput = Number(
//     prompt(`
//     Olá usuário! Digite o número da opção desejada:

//     1. Cadastrar um item na lista
//     2. Mostrar itens cadastrados
//     3. Sair do programa
//   `),
//   );

//   if (userInput === 1) {
//     const item = prompt('Adicione o item desejado:');
//     itemsArray.push(item);
//   } else if (userInput === 2) {
//     if (itemsArray.length === 0) {
//       alert('Não existem itens cadastrados');
//     } else {
//       alert(itemsArray);
//       console.log(itemsArray);
//     }
//   } else {
//     alert('Saindo do programa');
//   }
// }
