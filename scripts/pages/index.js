    import photographers from "../../data/photographers.js"

    async function getPhotographers()
     {
        // Penser à remplacer par les données récupérées dans le json
        //faire un cosole log du script
      
      var json = JSON.parse($.getJSON({'url': "../../data/photographers.json", 'async': false}).responseText);

      console.log(JSON); 
     }



    
        // et bien retourner le tableau photographers seulement une fois
     
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
    /*

     do let:jsoon

    fetch (jsoon) 
    .then (function (data) { //= fction anonyme
        if (data.ok) {
            return data.json();
        }
    }
    
    const jsonData= require('./students.json'); 
console.log(jsonData);
////////////////////////////

fetch ("data/photographers.json") 
        .then (function (data)
         { //= fction anonyme
            console.log(data);

        if (data.ok) {
            return data.json();
        }
    })

*/