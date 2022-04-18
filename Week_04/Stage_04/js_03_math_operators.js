/*
  Capturar 2 números e fazer
  as seguintes operações:
  adição, subtração, multiplicação,
  divisão e resto

  e para cada operação, mostrar um alert 
  com o resultado
*/

alert('Forneça dois números');
const firstNum = prompt('Primeiro número:');
const secondNum = prompt('Segundo número:');

alert(
  `Adição: ${firstNum} + ${secondNum} = ${
    Number(firstNum) + Number(secondNum)
  }`,
);
alert(
  `Subtração: ${firstNum} - ${secondNum} = ${
    Number(firstNum) - Number(secondNum)
  }`,
);
alert(
  `Multiplicação: ${firstNum} * ${secondNum} = ${
    Number(firstNum) * Number(secondNum)
  }`,
);
alert(
  `Divisão: ${firstNum} / ${secondNum} = ${
    Number(firstNum) / Number(secondNum)
  }`,
);
alert(
  `Resto: ${firstNum} % ${secondNum} = ${Number(firstNum) % Number(secondNum)}`,
);
