function printAsyncName(callback, name) {
  setTimeout(() => {
    console.log("Hola");

    setTimeout(() => {
      console.log(name);
    }, 2000);
  }, 1000);
}

printAsyncName(() => {}, "Mario");
