function capData2(){
    let textSearch=document.getElementById('find').value
    let checkbox=Array.from(document.querySelectorAll('.checkbox:checked')).map(each=>each.value)
    let filter= pastfilter.filter(each=>{
        return (each.description.toLowerCase().includes(textSearch) || each.name.toLowerCase().includes(textSearch)) && (checkbox.length===0 || checkbox.includes(each.category))
    })
    //console.log(filter)
    if (filter.length>0){
        let eventCards = []
        for (let each of filter) {
            let card = `
                <div class="card p-2 ps-0 pe-0 pt-0 m-2 col-3" style="width:250px">
                  <img src="${each.image}" class="card-img-top card-img img-fluid" alt="${each.name}">
                  <div class="card-body text-bg-dark text-center">
                    <h5 class="card-title">${each.name}</h5>
                    <p class="card-text">${each.description}</p>
                  </div>
                  <div class="card-footer text-center"><a href="./eventview.html?id=${each._id}" class="btn btn-danger">View details</a>
                  </div>
                </div>
              `
            eventCards.push(card)
          }
          
          let eventcontainer = document.getElementById('cardscontainer2')
          eventcontainer.innerHTML = eventCards.join('')
    }else{
        notFound('#cardscontainer2')
    }
}