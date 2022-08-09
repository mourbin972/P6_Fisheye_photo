function mediaFactory(data)
{
    const {id,photographerId,title,image,likes,date,price} = data;

}

const picture = `assets/Sample/${image}`;

function getmediaCardDom(){
    const article = document.createElement( 'article' );
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture);
}