/*
  Jogo da adivinhação;

  - apresente a mensagem ao usuário:
    'adivinhe o número que estou pensando, está entre 0 e 10';
  - crie uma lógica para gerar um número aleatório e 
  verificar se o número digitado é o mesmo que o aleatório
  gerado pelo sistema;
  - enquanto o usuário não adivinhar o número, mostrar a mensagem:
    'erro, tente novamente';
  - caso o usuário acerte o número, apresentar a mensagem:
    'parabéns! você acertou o número em x tentativas';
  - substitua o 'x' da mensagem pelo número de tentativas;
*/

let userNum = prompt(
  'Adivinhe o número que estou pensando, está entre 0 e 10.',
);
const randomNum = Math.round(Math.random() * 10);

let i = 1;
while (Number(userNum) !== randomNum) {
  userNum = prompt('Erro, tente novamente');
  i++;
}

if (i === 1) {
  alert(
    `Parabéns! O número que pensei foi ${randomNum}, e você acertou o número em 1 tentativa`,
  );
} else {
  alert(
    `Parabéns! O número que pensei foi ${randomNum}, e você acertou o número em ${i} tentativas`,
  );
}
