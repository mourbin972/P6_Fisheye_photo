function photographerFactory(data) {
    const { name, city, country,tagline, price, portrait  } = data; //ajouter tout les elements issue du jsons de photographers.js

    const picture = `assets/photographers/${portrait}`;
     //const pictures = "assets/photographers/" + portrait;    //variable "portrait" interprété comme chaine de char

    function getUserCardDOM() {

        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
// creeer lien ici  a/href
        const link = document.createElement('a');
        link.href = "scripts/utils/media.html";
        
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city;
        const h31 = document.createElement( 'h3' );
        h31.textContent = country;
        const p = document.createElement( 'h4' );
        p.textContent = tagline;
        const p1 = document.createElement( 'h4' );
        p1.textContent = price;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h31);
        article.appendChild(p);
        article.appendChild(p1);
        return (article);
    }
    return { name, city,country,tagline, price, picture, getUserCardDOM }

    
}

// return un objet 
//charger les photos dans asset  (liste)

// mettre/ajouter le "html" dans js du photographer evec create element 

// "methode filter" de js = recuperer les id et afficher les donnée correspondantes 