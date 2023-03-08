/*Muestro Eventos en Upcoming Events */
const events=data.events
let upcomingEvent = []
let upceCat=[]
function showUpEvents() {
    for (let each of events) {
      if (each.estimate) {
        
        let card = `
          <div class="card p-2 ps-0 pe-0 pt-0 m-2 col-3" style="width:250px">
            <img src="${each.image}" class="card-img-top card-img img-fluid" alt="${each.name}">
            <div class="card-header text-center">
              <span class="text-primary">Coming Soon!!</span>
            </div>
            <div class="card-body text-bg-dark text-center">
              <h5 class="card-title">${each.name}</h5>
              <p class="card-text">${each.description}</p>
            </div>
            <div class="card-footer text-center"><a href="./eventview.html?id=${each._id}" class="btn btn-danger">View details</a>
            </div>
          </div>
        `
        upcomingEvent.push(card)
        upceCat.push(each)
      }
    }
    let eventcontainer1 = document.getElementById('cardscontainer1')
    eventcontainer1.innerHTML = upcomingEvent.join('')
    let catUpce=catNoRepeat(upceCat)
    console.log(catUpce)
    

  }
  showUpEvents()
  