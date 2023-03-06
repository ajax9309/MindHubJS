/*Funciones y loops */
const Events=data.events
let eventCards = []
function showCardEvents(){
for (let each of Events) {
  let card = `
      <div class="card shadow-lg p-2 ps-0 pe-0 pt-0 m-2 col-3" style="width:250px">
        <img src="${each.image}" class="card-img-top card-img img-fluid" alt="${each.name}">
        <div class="card-body text-bg-dark text-center">
          <h5 class="card-title">${each.name}</h5>
          <p class="card-text">${each.description}</p>
        </div>
        <div class="card-footer text-center"><a href="./eventview.html?Id=${each._id}" class="btn btn-danger">View details</a>
        </div>
      </div>
    `
  eventCards.push(card)
}
/*Muestro Eventos en Home */
let eventcontainer = document.getElementById('cardscontainer')
eventcontainer.innerHTML = eventCards.join('')
}

showCardEvents()