//event listener for when our DOM loads
document.addEventListener("DOMContentLoaded", function(){
    getFilms()
})

//feteching data from json database
function getFilms(){
    fetch("http://localhost:3000/films")
    .then(response =>response.json())
    .then(films=>displayFilms(films))
}

//displaying film function
function displayFilms(films){
    for (const film of films ){
        const moviesList =document.querySelector('#movies-list');
        

        //creating elements
        const list= document.createElement('li');

        //inserting data to elements
        list.innerText = film.title;

        //appending 
        moviesList.append(list)



    }
}
