var test = 'example';
(() => {
  console.log(`Valor dentro da função ${test}`);

  if (true) {
    var test = 'example';

    console.log(`Valor dentro do if ${test}`);
  }

  console.log(`Valor após a execução do if ${test}`);
})();

console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');

(() => {
  let test2 = 'valor função';
  console.log(`Valor dentro da função ${test2}`);

  if (true) {
    let test2 = 'valor if';

    console.log(`Valor dentro do if ${test2}`);
  }

  console.log(`Valor após a execução do if ${test2}`);
})();
