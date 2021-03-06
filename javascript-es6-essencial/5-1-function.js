function fn() {
  return 'Code Here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
  // mais de uma expressão
  return 'Code Here Again';
};

// Funções também são objetos
fn.prop = 'Posso criar propriedades';

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec => fnParam => allowed => {
  if (allowed) {
    fnParam();
  }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);  // Executará a função fn
handleFnExecution();  // Não executará a função fn

// controlFnExec como função 
function controlFnExec2(fnParam) {
  return function(allowed) {
    if (allowed) {
      fnParam();
    }
  }
}