const students = [
  { name: 'Alexander', grade: 6 },
  { name: 'Kelvin', grade: 9 },
  { name: 'Sara', grade: 10 },
];

function getApproved(studentsList) {
  return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApproved(students));

console.log('Lista de alunos:');
console.log(students);
