let query=location.search
let param= new URLSearchParams(query)
//console.log(param)
let idQuery=param.get('id')
//console.log(idQuery)

function genCardDetails(id){
    return `
    <div class="card m-4 my-5" style="max-width: 950px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img id="imgdetails" src="${id.image}" class="rounded-start img-fluid" alt="${id.name}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${id.name}</h5>
                    <p class="card-text">${id.description}</p>
                </div>
                <div class="card-footer text-muted d-flex justify-content-between">
                    <div><span>Price: ${id.price}</span></div>
                    <div><span>Assistance: ${id.assistance}</span></div>
                    <div><span>Place: ${id.place}</span></div>
                    <div><span>Assistance: ${id.capacity}</span></div>
                </div>
            </div>        
        </div>
    </div>    
    `
}

function showDetail(tag_id,id,arrayEvent){
    
    let container=document.querySelector(tag_id)
    id= arrayEvent.find(each => each._id == id)
    //console.log(id)
    let details=genCardDetails(id)
    //console.log(details)
    container.innerHTML = details
}
showDetail('#containerdetail',idQuery,data.events)