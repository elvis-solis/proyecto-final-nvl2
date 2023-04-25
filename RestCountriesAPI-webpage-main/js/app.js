
import data from './data.js';
import dom from './dom.js';
const datos=await data.getData()
const regiones = data.encontrarregiones(datos);
console.log(regiones)
    dom.listaderegiones(regiones,'#ubicasionendom')

    dom.mostrarcards(datos);

    const cardsdepaises = [...contenedor.children];

    cardsdepaises.forEach((card) => {
      card.addEventListener('click', () => {
        console.log(card)
          let pais = '';
        pais = card.children[0].children[1];
        console.log(pais)
          pais = pais.children[0].children[0].textContent;
            console.log(pais)
          let paisSeleccionado = data.filtroPais(datos,pais);
          dom.mostrarinformacioncompleta(paisSeleccionado);
          
      })
  });


    //filtro por region  
    let filtradoregiones = '';
    let listado = document.getElementById('ubicasionendom');
    listado = [...listado.children];
    
    let regionelegida = 0;
    
    listado.forEach((lugar, index) => {
        console.log(lugar.children[0].textContent)
      lugar.addEventListener('click', () => {
        if (lugar.classList.contains('regionelegida')) return;
    
        if (regionelegida > 0) { 
          listado[regionelegida].classList.remove('regionelegida');
        }
    
        lugar.classList.add('regionelegida');
        //console.log(listado);
    
        regionelegida = index;
    
        let filtro = lugar.children[0].textContent;
    
        filtradoregiones = filtro === 'All' ? datos : data.filtrarregion(datos, filtro);
        console.log(filtradoregiones)
        //dom.listaderegiones(filtradoregiones);
        //console.log(filtradoregiones)
        dom.mostrarcards(filtradoregiones)
      });
    });   

      // const selecciondecards = document.querySelectorAll(.card)
      // cconsole.log()
//esto es para el dark mode
const html=document.querySelector("html");
console.log(html.dataset)

const darkBtn = document.querySelector("#switch");

darkBtn.addEventListener("click",()=>{
    html.dataset.bsTheme=html.dataset.bsTheme=="ligth" ? "dark": "ligth";
})

// esto seria el filtro del buscador por nombre 

const buscarpais = dom.$('#buscar-pais');

buscarpais.addEventListener('keyup', () => {
    let filtro = buscarpais.value;
    console.log(filtro)
    const filtered =filtro =='' ? datos : data.filterByName(datos,filtro);
    dom.mostrarcards(filtered);
})
//dom.mostrarcards(datos)
