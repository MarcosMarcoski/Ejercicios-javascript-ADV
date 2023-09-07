const isLogged = true;

function mipromesa(isLogged) {
  return new Promise((resolve, reject) => {
    let rand = Math.random();
    if (isLogged) {
      resolve(rand);
    } else {
      reject(new Error("isLogger is false"));
    }
  });
}

function miSegundaPromesa(randNumber) {
  return new Promise((resolve, reject) => {
    if (randNumber > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("User does not exist"));
    }
  });
}

mipromesa(3)
    .then(miSegundaPromesa)
    .then((val)=> console.log(val))
    .catch((err)=> console.error(err))
    .finally(()=> console.log("finally"))