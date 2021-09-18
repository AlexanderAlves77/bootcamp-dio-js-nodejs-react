(() => {
  this.name = 'arrow function';
  const getArrowFn = () => this.name;

  function getName() {
    return this.name;
  }

  const user = {
    name: 'Nome no objeto de execução',
    getArrowFn,
    getName,
  };

  console.log(user.getArrowFn());
  console.log(user.getName());
})();
