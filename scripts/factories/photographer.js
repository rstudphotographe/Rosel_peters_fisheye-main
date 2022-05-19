// Creation de chaque élément de la page index.html
export function photographerFactory(data) {
    const { name, portrait, city, tagline, price, id } = data;

    const picture = `./assets/Photographers/Photographers_ID_Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const lienElt = document.createElement( 'a' );
        img.setAttribute("src", picture);
        lienElt.setAttribute('href', `photographer.html?photographer=${id}` );
        img.setAttribute(`alt`, `${name}`)
        
        article.appendChild(lienElt);
        lienElt.appendChild(img);

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(h2);

        const h3 = document.createElement ( 'h3' );
        h3.textContent = city;
        article.appendChild(h3);

        const h4 = document.createElement ( 'p');
        h4.textContent = tagline;
        article.appendChild(h4);

        const span = document.createElement ('span')
        span.textContent = price ;
        article.appendChild(span);

        const day = document.createElement ('h4')
        day.classList.add('day')
        day.textContent = "/jour";
        article.appendChild(day)
        
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

