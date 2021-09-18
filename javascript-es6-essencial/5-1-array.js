const users = ['Alexander', 'Kelvin', 'Sara'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W'),
};

const persons = [
  { name: 'Alexander', age: 44, gender: gender.MAN },
  { name: 'Kelvin', age: 20, gender: gender.MAN },
  { name: 'Sara', age: 7, gender: gender.WOMAN },
];

// Retornar a quantidade de itens de um array
console.log('Items:', persons.length);

// Verificar se é array
console.log('A variavel persons é um array:', Array.isArray(persons));

// Iterar os itens do array
persons.forEach((person, idx, arr) => {
  console.log(`Nome: ${person.name} index: ${idx}`, arr);
});

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('Nova lista apenas com homens:', mens);

// Retornar um novo
const personsWithCourse = persons.map(person => {
  person.course = 'Introdução ao Javascript';
  return person;
});
console.log('Pessoas com a adição de course:', personsWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);
console.log('Soma de idade das pessoas:', totalAge);

// Juntando operações
const totalEvenAges = persons
  .filter(person => person.age % 2 === 0)
  .reduce((age, person) => {
    age += person.age;
    return age;
  }, 0);
console.log('Soma de idade das pessoas que possuem idade par:', totalEvenAges);
