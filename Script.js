const imagens = [
   
    "imagensLOGOTIPO/IMG_3814.JPG",
    "imagensLOGOTIPO/IMG_3815.JPG"
  ];

  let indice = 0;
  const imgElement = document.getElementById("fotoDona");

  setInterval(() => {
    indice = (indice + 1) % imagens.length;
    imgElement.src = imagens[indice];
  }, 5000);
//-------------------------------------
  
  const imagensDesignSobrancelha = [

    "imagensTratamentos/designSobrancelha02.jpeg",
    "imagensTratamentos/designSobrancelha01.jpeg",
    "imagensTratamentos/designSobrancelha03.jpeg",
  ];

  let indiceDesign = 0;
  const imgElementDesign = document.getElementById("designSobrancelha");

  setInterval(() => {
    indiceDesign = (indiceDesign + 1) % imagensDesignSobrancelha.length;
    imgElementDesign.src = imagensDesignSobrancelha[indiceDesign];
  }, 5000);
//-------------------------------------------

const imagensLimpezaPele = [
   
  "imagensTratamentos/limpezaPele01.jpeg",
  "imagensTratamentos/limpezaPele02.jpeg",
  "imagensTratamentos/limpezaPele03.jpeg",
];

let indiceLimpezaPele = 0;
const imgElementLimpezaPele = document.getElementById("limpezaPele");

setInterval(() => {
  indiceLimpezaPele = (indiceLimpezaPele + 1) % imagensLimpezaPele.length;
  imgElementLimpezaPele.src = imagensLimpezaPele[indiceLimpezaPele];
}, 5000);
//---------------------------------------------------

const imagensHydra = [
   
  "imagensTratamentos/Hydra01.jpeg",
  "imagensTratamentos/Hydra02.jpeg",
  "imagensTratamentos/Hydra03.jpeg",
];

let indiceHydra = 0;
const imgElementHydra = document.getElementById("hydraGloss");

setInterval(() => {
  indiceHydra = (indiceHydra + 1) % imagensHydra.length;
  imgElementHydra.src = imagensHydra[indiceHydra];
}, 5000);
//-----------------------------------------------

const imagensBrow = [
   
  "imagensTratamentos/Brow01.jpeg",
  "imagensTratamentos/Brow02.jpeg",
  "imagensTratamentos/Brow03.jpeg",
];

let indiceBrow = 0;
const imgElementBrow = document.getElementById("browLamination");

setInterval(() => {
  indiceBrow = (indiceBrow + 1) % imagensBrow.length;
  imgElementBrow.src = imagensBrow[indiceBrow];
}, 5000);
//---------------------------------------------------

const imagensLash = [
   
  "imagensTratamentos/Lash01.jpeg",
  "imagensTratamentos/Lash02.jpeg",
  "imagensTratamentos/Lash03.jpeg",
];

let indiceLash = 0;
const imgElementLash = document.getElementById("lashLifting");

setInterval(() => {
  indiceLash = (indiceLash + 1) % imagensLash.length;
  imgElementLash.src = imagensLash[indiceLash];
}, 5000);
//---------------------------------------------------

const imagensMicro = [
   
  "imagensTratamentos/Micropigmentação01.jpeg",
  "imagensTratamentos/Micropigmentação02.jpeg",
  "imagensTratamentos/Micropigmentação03.jpeg",
];

let indiceMicro = 0;
const imgElementMicro = document.getElementById("micropigmentacao");

setInterval(() => {
  indiceMicro = (indiceMicro + 1) % imagensMicro.length;
  imgElementMicro.src = imagensMicro[indiceMicro];
}, 5000);




  function scrollSlider(direction) {
    const slider = document.getElementById('treatmentSlider');
    const scrollAmount = 320; // tamanho de um card + gap

    slider.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
