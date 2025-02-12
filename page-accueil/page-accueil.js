const url = "../ville-json/info-ville.json";

fetch(url).then(infoVille);

function infoVille(response) {
    console.log(response.ok);
    // ".ok" contient un boolean indiquant si la requête s'est bien passé.
    if(response.ok)
        then(data=>{
            console.log(data);
            let select = document.getElementById("bienImobilier");
            data.json().then(ville=> {
                for(let bien of ville.biens) {
                    let option = document.createElement("option");
                    option.textContent = bien.type + " : " + bien.prix;
                    select.appendChild(option);
                }
            })
        })
            .catch(error=>console.error(error));

        else 
        {
            console.error(response.statusText);
        }
}

const btnEnvoyer = document.getElementById("rechercher");

btnEnvoyer.addEventListener("click", (e) => {
    

})

function displayVille(ville) {
    const ville = document.createElement("div");
    
}