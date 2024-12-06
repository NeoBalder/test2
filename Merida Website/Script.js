var Movies;


Movies = ['https://www.cultura.gob.es/dam/jcr:ce717f05-cedf-4f98-9680-7061cd5b7146/mosaico-de-los-aurigas-1-r.jpg', 'https://www.cultura.gob.es/dam/jcr:7a5159fb-b39a-4b05-969a-7b82a9cde8cf/mosaico-de-los-aurigas-3.jpg', 'https://www.turismoextremadura.com/viajar/shared/galerias/rrtt/museos/museo_00002/img/A_MNAR_03.jpg', 'https://www.cultura.gob.es/.imaging/mte/micrositios-theme/contenido-cim-ancho-2c/dam/micrositios/mnromano/colecciones/imagenes/mosaico-la-caza-del-jabal--2/jcr:content/mosaico-la-caza-del-jabal--2.jpg', 'https://meridavisitas.com/wp-content/uploads/2023/09/Museo-Nacional-de-Arte-Romano-de-Merida.jpg', 'https://guias-viajar.com/wp-content/uploads/2021/11/merida-museo-arte-romano-2.jpg', 'https://www.cultura.gob.es/dam/jcr:669eb3ef-a07b-4c6c-b9a1-acf6c8431b5b/moneda-reverso.jpg'];
let element_Picture = document.getElementById('Picture');
element_Picture.setAttribute("src", Movies[0]);


document.getElementById('button').addEventListener('click', (event) => {
  let element_Picture2 = document.getElementById('Picture');
  element_Picture2.setAttribute("src", Movies.slice(-1)[0]);
  Movies.unshift(Movies.pop());

});

document.getElementById('button2').addEventListener('click', (event) => {
  let element_Picture3 = document.getElementById('Picture');
  Movies.push(Movies.shift());
  element_Picture3.setAttribute("src", Movies[0]);

});