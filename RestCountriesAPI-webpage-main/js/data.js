const getData = async () => {
    // Obytener los datos del archivo 'stays.json'
    const data = fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then( json => json)
  
    return data;
  }

  const encontrarregiones= (data) => {
    let regiones = data.map ((element) => element.region);
    regiones = new Set(regiones);
    
    regiones = ['All', ...regiones]
    return regiones; 
  }

  const filtrarregion =(arreglo,filtro)=>{
    let filtered=arreglo.filter(pais=>pais.region===filtro)
    return filtered
   }



  
  

// filtro del buscador viene de la app
const filterByName = (arr,filtro) => {
  console.log(arr)
  let filtered=arr.filter(elem=>elem.name.common.toLowerCase().includes(filtro.toLowerCase()))
  
   return filtered
    }



const filtroPais = (arr, filtro) => {
  let filtered = arr.filter (element =>element.name.common==filtro);
  
  console.log(filtered)
  return filtered;
}

    export default{
      getData,encontrarregiones,filtrarregion,filterByName, filtroPais
    }


  