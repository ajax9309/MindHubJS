let query=location.search
let params= new URLSearchParams(query)
console.log(params)
let idQuery=params.get('Id')
console.log(idQuery)

function genCardDetails(eventdetail){
    return `
    <div class="card m-3" style="max-width: 750px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img id="imgdetails" src="${eventdetail.image}" class="rounded-start img-fluid" alt="${eventdetail.name}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${eventdetail.name}</h5>
                    <p class="card-text">${eventdetail.description}</p>
                </div>
            </div>
        </div>
    </div>    
    `
}

function showDetail(tag_id,eventdetail,ArrayEvents){
    let container=document.querySelector(tag_id)
    eventdetail= ArrayEvents.find(each=>each._id===eventdetail)
    console.log(eventdetail)
    let details=genCardDetails(eventdetail)
    container.innerhtml=details
}
showDetail('#containerdetail',idQuery,Events)