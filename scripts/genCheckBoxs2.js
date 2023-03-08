function genCheckBoxs2(tag_id,category){
    let catcontainer=document.querySelector(tag_id)
    category=category.map(each=>{
        return `
        <div class="p-1 pe-3">
            <label for="${each}">${each}</label>
            <input onClick="capData2()" class="checkbox ps-2" type="checkbox" name="${each}" value="${each}" id="${each}">
        </div>
        `
    })
    
    catcontainer.innerHTML=category.join('')
}
genCheckBoxs2('#categorycontainer',catNoRepeat(pastfilter))