const $=(selec)=>document.querySelector(selec);

const listaderegiones = (regiones, ubicasionendom) => {

    const listapadre = $('#ubicasionendom');
    console.log(listapadre)
  
    regiones.forEach(element => {
      //console.log(ciudades)
        const li = document.createElement('li');
        li.innerHTML = `<span class="my-1">${element}<span>`;
        li.className += ` dropdown-item`;
        listapadre.appendChild(li);
        return li;
    });
  
}

const newcard= (obj)=>{
  const section =document.createElement('section')
  
  section.innerHTML=`<div class="card" style="width: 18rem;"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
  <img src="${obj.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <div class="card-text estilodeletra">
      <h2 class="textodetitulo fw-bold"> ${obj.name.common}</h2>
      <p class="textodesubtitulo">
        <span>Population: </span><span>${obj.population}</span>
    </p>
    <p class="textodesubtitulo">
      <span>Region: </span><span>${obj.region}</span>
     </p>
     <p class="textodesubtitulo">
      <span>Capital: </span><span>${obj.capital}</span>
     </p>

    </div>`
  
  section.className= "col card"
  
  return section;
  }

  const mostrarcards= (arr)=>{
    const contenedor = $('#contenedor') 
    contenedor.innerHTML='';
    arr.forEach(element => {
      const card=newcard(element)
      contenedor.appendChild(card);
    });
    
  }

  /*const cardindividual=obj=>{
    const contenedorcard = $('#contenedorcardindividual') 
    contenedor.innerHTML='';
    const section =document.createElement('section')
    //obj.ya sea nnombre y si no el nombre . si quiero avanzar 
  
  section.innerHTML=`<div class=" col"><img src="${obj.flags.png}" alt=""></div> 
  <div class=" col row">
    <div class=" col">
      <p>pais</p>
      <p><span>native name: </span><span>${obj.nativeName}</span></p>
      <p><span>population: </span><span>${obj.population}</span></p>
      <p><span>Region: </span><span>${obj.region}</span></p>
      <p><span>sub Region: </span><span>${obj.subregion}</span></p>
      <p><span>Capital</span><span></span>${obj.capital}</p>
    </div>
    <div class=" col">
      
      <p><span>top level Domain: </span><span>${obj.topLevelDomain}</span></p>
      <p><span>currencies: </span><span>${obj.currencies.name}</span></p>
      <p><span>Lenguages: </span><span>${obj.languages.name.name.name}</span></p>
      
    </div>
  </div>`
  
  section.className= "offcanvas-body d-flex row"
  contenedor.appendChild(section);

  }*/
  

//FUncion que crea la card del offcanvas con la información completa
const mostrarinformacioncompleta = (obj) => {
  const div = document.createElement('div');
    console.log(obj)
  div.className += "offcanvas-body row";
    

    div.innerHTML = `<div class=" col"><img src="${obj.flags.png}" alt=""></div> 
    <div class=" col row">
      <div class=" col">
        <p>pais</p>
        <p><span>native name: </span><span>${obj.nativeName}</span></p>
        <p><span>population: </span><span>${obj.population}</span></p>
        <p><span>Region: </span><span>${obj.region}</span></p>
        <p><span>sub Region: </span><span>${obj.subregion}</span></p>
        <p><span>Capital</span><span></span>${obj.capital}</p>
      </div>
      <div class=" col">
        
        <p><span>top level Domain: </span><span>${obj.topLevelDomain}</span></p>
        <p><span>currencies: </span><span>${obj.currencies.name}</span></p>
        <p><span>Lenguages: </span><span>${obj.languages.name.name.name}</span></p>
        
      </div>
    </div>`
    
    
    ;
    contenedorcardindividual.innerHTML = '';

    contenedorcardindividual.appendChild(div);
}


  export default{
    listaderegiones, newcard, mostrarcards, /*cardindividual,*/$,mostrarinformacioncompleta
  }