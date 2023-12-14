


async function getData(){

    const url = 'http://localhost:8080/v1/series';

    try {
        
        const responseJson = await fetch(url); //se obtienen datos de la api
        if(!responseJson.ok){

            throw new Error(`Error en la solicitud: ${responseJson.status}`)

        }

        const resolve = await responseJson.json();
        return resolve
        


    } catch (error) {
        console.error(error.message);
    }
}



async function fetchData(){
    const response = await getData();
    if (response.metadata[0].Code == "00"){
        console.log("todo bien");
        printSerie(response);
    }


    console.log(response.serieResponse.serie)
}
fetchData();






async function printSerie(response){
    const series =  response.serieResponse.serie.map(serie =>serie);
    const print = series.map( serie =>{
        const starIcons = Array.from({ length: serie.rating }, () => '<i class="fa-solid fa-star"></i>').join('');

        return `
                <tr>
                    <td>${serie.id}</td>
                    <td>${serie.name}</td>
                    <td>${serie.releaseYear}</td>
                    <td>${starIcons}</td>
                    <td><a href="./series/${serie.name}.html" target="_self">Ver más</a></td>
                </tr>       
        `
    }).join("");

    const idDom = document.getElementById('body');
    idDom.innerHTML=print;


}
