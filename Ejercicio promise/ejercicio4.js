const number = 15;

const miPromesa = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("El número es mayor que 10.");
  } else {
    reject("El número es menor o igual a 10.");
  }
});

miPromesa
  .then((mensaje) => {
    console.log("Éxito:", mensaje);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
