//event listener for when our DOM loads
let = 
document.addEventListener("DOMContentLoaded", function(){
    getFilms()
})

//feteching data from json database
function getFilms(){
    fetch("http://localhost:3000/films")
    .then(response =>response.json())
    .then(films=>{
        displayFilmsTitle(films)
        displayPosters(films)
    })
}

//displaying film function
function displayFilmsTitle(films){

        for (const film of films ){

        //selecting elements
        const moviesList =document.querySelector('#movies-list');

        //creating elements
        const list= document.createElement('li');

        //inserting data to elements
        list.innerText = film.title;
        

        //appending 
        moviesList.append(list)
    }
}

//display card details
function displayPosters(films){
    const filmsContainer = document.querySelector('#filmsCard')
    for(const film of films){
        filmsContainer.innerHTML+=` 
        <div class="col-3 mx-1 p-2">
        <div class="card" >
            <img id="image" src="${film.poster}" alt=" movie poster">
            <div class="card-body">
              <h5 class="card-title">${film.title}</h5>
              <p class="id">Id Number: ${film.id}</p>
              <p class="runtime">Runtime:${film.runtime}</p>
              <p class="showtime">Showtime: ${film.showtime}</p>
              <p class="capacity"> Capacity: ${film.capacity}</p>
              <p class="ticket_sold"> Ticket Sold: ${film.ticket_sold}</p>
              <p class="card-text">${film.description}</p>
              <a href="#" class="btn btn-primary">Buy Ticket</a>
            </div>
          </div>
          `
        filmsContainer.append(films)
    }}


