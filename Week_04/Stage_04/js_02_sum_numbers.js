/*
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário
*/

alert('Iremos somar dois números');
const firstNum = prompt('Digite o primeiro número:');
const secondNum = prompt('Digite o segundo número:');
const total = Number(firstNum) + Number(secondNum);

alert(`${firstNum} + ${secondNum} = ${total}`);
