


async function getData(){

    const url = 'http://localhost:8080/v1/series';

    try {
        
        const responseJson = await fetch(url); //se obtienen datos de la api
        const resolve = await responseJson.json();
        return resolve
        


    } catch (error) {
        console.error(error.message);
    }




}

async function fetchData(){
    const series = await getData();

    const kosas = series.metadata.map(serie=>{return serie })

    console.log(series, kosas)
}

fetchData();