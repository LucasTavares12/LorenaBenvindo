const imagens = [
    
    "IMG_3814.JPG",
    "IMG_3815.JPG"
  ];

  let indice = 0;
  const imgElement = document.getElementById("fotoDona");

  setInterval(() => {
    indice = (indice + 1) % imagens.length;
    imgElement.src = imagens[indice];
  }, 5000); // troca a cada 3 segundos

  function scrollSlider(direction) {
    const slider = document.getElementById('treatmentSlider');
    const scrollAmount = 320; // tamanho de um card + gap

    slider.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }