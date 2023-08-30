class Person {
    constructor(id, firstName, lastName, age) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  
  const developer = new Person(1, 'Mario', 'Rossi', 25);
  
  // Convertir el objeto a una cadena JSON
  const developerJSON = JSON.stringify(developer);
  
  // Imprimir la cadena JSON
  console.log(developerJSON);
  