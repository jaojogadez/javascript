// função que retorna uma promise
function asyncFunction(params) {
  return new Promise((resolve, reject) => {
    // simula um operação assíncrona
    setTimeout(() => {
      const isSuccess = true;
      if (isSuccess) {
        resolve("A operação deu certo!");
      } else {
        reject("Deu errado ;-;");
      }
    }, 3000);
  });
}

async function fetch() {
  const response = await asyncFunction();
  console.log(response);
}

let fetch2 = async () => {
  try {
    const response = await asyncFunction()
    console.log("Sucesso")
  } catch (error) {
    console.log(error)
  }
};

fetch2();
fetch();
