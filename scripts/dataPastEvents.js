/*Muestro Eventos en Past Events */
const events=data.events
const date=data.currentDate
let pastEvent = []
let pastfilter = []
function showPastEvents() {
    for (let each of events) {
      if (each.date < date) {
        let card = `
          <div class="card p-2 ps-0 pe-0 pt-0 m-2 col-3" style="width:250px">
            <img src="${each.image}" class="card-img-top card-img img-fluid" alt="${each.name}">
            <div class="card-body text-bg-dark text-center">
              <h5 class="card-title">${each.name}</h5>
              <p class="card-text">${each.description}</p>
            </div>
            <div class="card-footer text-center"><a href="./eventview.html?=id${each._id}" class="btn btn-danger">View details</a>
            </div>
          </div>
        `
        pastEvent.push(card)
        pastfilter.push(each)
      }
    }
    let eventcontainer2 = document.getElementById('cardscontainer2')
    eventcontainer2.innerHTML = pastEvent.join('')
    let catPast=catNoRepeat(pastfilter)
    console.log(catPast)
  }
  showPastEvents()