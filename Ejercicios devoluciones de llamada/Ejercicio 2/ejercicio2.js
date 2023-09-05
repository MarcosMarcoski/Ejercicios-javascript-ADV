const repeatHello = (callback) => {
    setInterval(() => {
      callback();
    }, 1000);
  };
  
  const helloCallback = () => {
    console.log("Hola");
  };
  
  // Para usar la función repeatHello con la función de devolución de llamada "helloCallback":
  repeatHello(helloCallback);
  