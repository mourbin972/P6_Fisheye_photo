function mediaFactory(data)
{
    const { id, photographerId,title,image,likes,date, price } = data;



const picture1 = `assets/Sample/${image}`;

function getmediaCardDom()
{
    const article = document.createElement( 'article' );
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture1);

        /*const id1 = document.createElement( 'h2' );
        id1.textContent = id;
        const picid = document.createElement( 'h3' );
        picid.textContent = photographerId;*/
        const title1 = document.createElement( 'h3' );
        title1.textContent = title;
        const img1 = document.createElement( 'h4' );
        img1.textContent = image;
        const likes1 = document.createElement( 'h4' );
        likes1.textContent = likes;
        const price1 = document.createElement( 'h4' );
        price1.textContent = price;

        article.appendChild(img);
        article.appendChild(title1);
        //article.appendChild(img1);
        article.appendChild(likes1);
        article.appendChild(price1);
        return(article);
}
    return{title,image,likes,price,picture1,getmediaCardDom }


    


} //a=href qui call photograph.html/id=...  -> metre l'id dans le html 