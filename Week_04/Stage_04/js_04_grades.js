/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre;
  Calcular a média do aluno;
  Se o aluno passou no bimestre, dar os 
  parabéns;
  Se o aluno não passou no bimestre,
  motivar o aluno a dar o seu melhor
  na prova de recuperação;
  Em ambos os casos, mostre uma mensagem
  com o nome do aluno e a nota final;
*/

const studentName = prompt('Nome do(a) aluno(a):');
alert('Dê as notas das suas 3 matérias desse bimestre. Valores de 1-100');
const gradeOne = prompt('Nota 1:');
const gradeTwo = prompt('Nota 2:');
const gradeThree = prompt('Nota 3:');

const averageGrades =
  (Number(gradeOne) + Number(gradeTwo) + Number(gradeThree)) / 3;

if (averageGrades >= 60) {
  alert(
    `Média final: ${averageGrades.toFixed(
      2,
    )}. Parabéns ${studentName}, você passou!`,
  );
} else if (averageGrades >= 40 && averageGrades < 60) {
  alert(
    `Média final: ${averageGrades.toFixed(
      2,
    )}. ${studentName}, estude para a sua prova de recuperação!`,
  );
} else {
  alert(`Média final: ${averageGrades.toFixed(2)}. Reprovado(a)`);
}
