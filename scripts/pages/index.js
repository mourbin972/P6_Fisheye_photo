     //import { photographers } from "./data/photographers.js";
    
    async function getPhotographers() //relié au json de photographe

     {

        // Penser à remplacer par les données récupérées dans le json
        //faire un cosonle log du script +return liste photograph

        
       console.log(photographers);
       return photographers;



     }
   
        // et bien retourner le tableau photographers seulement une fois
     
    async function displayData(photographers) { 
        const photographersSection = document.querySelector(".photographer_section"); //prend la classe dans le html 

        photographers.forEach((photographer) => { // photographer = nom donné à chaque ligne pour le "for each"
            const photographerModel = photographerFactory(photographer);//creer sans appeler
            const userCardDOM = photographerModel.getUserCardDOM(); //creer une carte à chaque fois
            photographersSection.appendChild(userCardDOM);   //appelle la carte           

        });
    };

    async function init() {
        // Récupère les datas des photographes
        const  photographers  = await getPhotographers(); //{}= objet dont la propriété = result.photographers !! plus un objet dc pas d'accolade
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

     var json = JSON.parse($.getJSON({'url': "../../data/photographers.json", 'async': false}).responseText);

      console.log(JSON);


      ----------
       await fetch(datajson)
            .then((response) => {
             if (response.ok) {
                return response.json();
            } else {
                console.log("error");
            }
        })
            .then((response) => {photo = response.photo }
        
      
     )

*/