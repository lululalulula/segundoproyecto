import './style.css'
import casasrurales from "./casasrurales.js";
import casasadaptadas from "./casasadaptadas.js";
import hotelesaccesibles from "./hotelesaccesibles.js";
//Recuperamos el botón y lo almacenamos en una constante
const dianoche = document.querySelector("#tema");
//Le vamos a añadir un evento click que le añada y le quite una clase al body llamda dark
dianoche.addEventListener("click", () => {
console.log (prueba);
});
// document.body.classList.toggle("dark");

const hotelesaccesibleslink = document.querySelector("#hotelesaccesibleslink");
const casasadaptadaslink = document.querySelector("#casasadaptadaslink");
const casasruraleslink = document.querySelector("#casasruraleslink");

//pintar
const main = document.querySelector("main");

//funcion pintar home
const pintarHome = () => {
  const main = document.querySelector("main");
  //Por seguridad, lo vaciamos
  main.innerHTML = "";
  //Pintamos HTML mediante innerHTML
  main.innerHTML = `
  <h3>Somos una empresa de gestion de viviendas accesibles de la Sierra Norte de Madrid, especializada en las necesidades de accesibilidad de personas con distintas discapacidades que ofrece:</h3>
  <p> Especialización en encontrar y ofrecer propiedades que cumplan con estándares de accesibilidad.
  <p> Ofrecemos asesoramientoindividualizado para adaptar propiedades a las necesidadesespecíficas de las personas con discapacidad.</p>
  <p> Conocimiento en regulaciones y ayudas financieras. Estamos al tanto de las regulaciones y programas de apoyo para laaccesibilidad, y guiar a los clientes en el proceso.</p>
  <p>Red de contactos con profesionales de accesibilidad. Tenemos conexiones con expertos en adaptaciones y accesibilidad parafacilitar mejoras en las propiedades.</p></h6>
   `;
};


//funcion de pintar hoteles
const pintarhotelesaccesibles = () => {
  //vaciamos
  const main = document.querySelector("");
  main.innerHTML = `
  <h4>Hoteles adaptados de la sierra de Madrid</h4>
  <section id="hotelesaccesibles"></section>
 `;
  const section = document.querySelector("#hotelesaccesibles");

//buble
for (const hotel of hotelesaccesibles) {
  //Creamos un article vacio en JS
  const article = document.createElement("article");
  //Le rellenamos el HTML al article con innerHTML
  article.innerHTML = `
    <p>Nombre: ${hotelesaccesibles.nombre}</p>
    <img src=${hotelesaccesibles.imagen}/>
    <p>Carpintería sin barreras: ${hotelesaccesibles.carpinteriasinbarreras ? 'Sí' : 'No'}</p>
    <p>Cocina accesible: ${hotelesaccesibles.cocinaaccesible ? 'Sí' : 'No'}</p>
    <p>Baño adaptado: ${hotelesaccesibles.banoadaptado ? 'Sí' : 'No'}</p>
    <p>Ducha accesible: ${hotelesaccesibles.duchaaccesible ? 'Sí' : 'No'}</p>
    <p>Piscina accesible: ${hotelesaccesibles.piscinaaccesible ? 'Sí' : 'No'}</p>
    <p>Situación: ${hotelesaccesibles.situacion}</p>
  `;
  hotelesaccesibles.appendChild(article);
}
}

//funcion pintar casasadaptadas

const pintarcasasadaptadas = () => {
  //vaciamos
  const main = document.querySelector("");
  main.innerHTML = `
  <h4>Viviendas adaptadas de la sierra de Madrid</h4>
  <section id = "casasadaptadas"></section>
 `;
  const section = document.querySelector("#casasadaptadas");

//buble casasadaptadas
for (const casa of casasadaptadas) {
  //vaciamos main
  const main = document.querySelector("");
  const article = document.createElement("article");
  article.innerHTML = `
  <p>Precio: ${casasadaptadas.precio}</p>
  <img src=${casasadaptadas.imagen}/>
  <p>Metros cuadrados: ${casasadaptadas.metroscuadrados}</p>
  <p>Orientación: ${casasadaptadas.orientacion}</p>
  <p>Dormitorios: ${casasadaptadas.dormitorios}</p>
  <p>Baños: ${casasadaptadas.banos}</p>
  <p>Calefación: ${casasadaptadas.calefaccion}</p>
  <p>Planta: ${casasadaptadas.planta}</p>
  <p>Estado: ${casasadaptadas.estado}</p>
  <p>Adaptada: ${casasadaptadas.adaptada ? 'Sí' : 'No'}</p>
  <p>Tipo de adaptación: ${casasadaptadas.tipoadaptacion}</p>
   `;

  casasadaptadas.appendChild(article);
}
}


const pintarcasasrurales = () => {
  main.innerHTML = `
  <h4>Casa rurales adaptadas de la sierra de Madrid</h4>
  <section id = "casasrurales"></section>
 `;
  const section = document.querySelector("#casasrurales");


for (const casa of casasrurales) {
  const article = document.createElement("article");
  article.innerHTML = `
  <p>Tipo: ${casasrurales.tipo}</p>
  <img src=${casasrurales.imagen}/>
  <p>Plazas: ${casasrurales.plazas}</p>
  <p>Admite animales: ${casasrurales.admiteanimales ? 'Sí' : 'No'}</p>
  <p>Interior: ${casasrurales.interior}</p>
  <p>Exterior: ${casasrurales.exterior}</p>
  <p>Situación: ${casasrurales.situacion}</p>
  `;

  casasrurales.appendChild(article);

}
}
pintarHome();


casasadaptadaslink.addEventListener("click", () => {
  pintarcasasadaptadas();
});

hotelesaccesibleslink.addEventListener("click", () => {
  pintarcasasrurales();
});

casasruraleslink.addEventListener("click", () => {
  pintarcasasrurales();
});


