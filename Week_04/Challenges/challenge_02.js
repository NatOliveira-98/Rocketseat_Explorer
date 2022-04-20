const students = [
  {
    studentName: 'Dean',
    grade_1: 6,
    grade_2: 4.4,
  },
  {
    studentName: 'Sam',
    grade_1: 9,
    grade_2: 8.8,
  },
  {
    studentName: 'Cass',
    grade_1: 7,
    grade_2: 5,
  },
  {
    studentName: 'John',
    grade_1: 10,
    grade_2: 9.5,
  },
  {
    studentName: 'Mary',
    grade_1: 8,
    grade_2: 7,
  },
];

function averageGrade(grade1, grade2) {
  return (grade1 + grade2) / 2;
}

for (const student of students) {
  const { grade_1, grade_2 } = student;
  const finalGrade = averageGrade(grade_1, grade_2);

  if (finalGrade >= 7) {
    alert(`
      A média do(a) aluno(a) ${student.studentName} é: ${finalGrade}.
      Parabéns, ${student.studentName}! Você foi aprovado(a) no concurso!
    `);
  } else {
    alert(`
      A média do(a) aluno(a) ${student.studentName} é: ${finalGrade}.
      Não foi dessa vez, ${student.studentName}! Tente novamente!
    `);
  }
}
