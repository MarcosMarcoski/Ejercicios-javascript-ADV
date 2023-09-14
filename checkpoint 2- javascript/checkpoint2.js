const getimages = async () => {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    const data = await response.json();
    // console.log(data)

    const imagenes = [];

    data.forEach((gato) => {
      const { url } = gato;
      imagenes.push(url);
      
    });
    return imagenes
  } catch (error) {
    console.log("Esto da error ", error);
  }
};

getimages();


