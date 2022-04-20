const firstNum = Number(
  prompt(`
  Forneça dois números para a realização de operações matemáticas.

  Primeiro número:
`),
);
const secondNum = Number(prompt('Segundo número:'));

const sum = firstNum + secondNum;

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${firstNum - secondNum}`);
alert(`A multiplicação dos dois números é: ${firstNum * secondNum}`);
alert(`A divisão dos dois números é: ${firstNum / secondNum}`);
alert(`O resto dos dois números é: ${firstNum % secondNum}`);

if (sum % 2 === 0) {
  alert(`A soma dos dois números é par: ${sum}`);
} else {
  alert(`A soma dos dois números é ímpar: ${sum}`);
}

if (firstNum === secondNum) {
  alert('Os números inseridos são iguais');
} else {
  alert('Os números inseridos são diferentes');
}
