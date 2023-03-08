function genCheckBoxs1(tag_id,category){
    let catcontainer=document.querySelector(tag_id)
    category=category.map(each=>{
        return `
        <div class="p-1 pe-3">
            <label for="${each}">${each}</label>
            <input onClick="capData1()" class="checkbox ps-2" type="checkbox" name="${each}" value="${each}" id="${each}">
        </div>
        `
    })
    
    catcontainer.innerHTML=category.join('')
}
genCheckBoxs1('#categorycontainer',catNoRepeat(upceCat))