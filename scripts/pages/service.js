 //Fetch qui récupère les données json
 function getDataPhotographers() {
    return fetch ("data/photographers.json")
    .then(reponse => reponse.json())
    .then(data => data)
}
export default getDataPhotographers;