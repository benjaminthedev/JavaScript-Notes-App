let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()

    const timeStamp = moment().valueOf()     

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)   
    
})

window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)        
    }
})

// const now = new Date()
// const timeStamp = now.getTime()

// const myDate = new Date(timeStamp)
// console.log(myDate.getFullYear())

//console.log(now.toString())

// console.log(`Year ${now.getFullYear()}`)
// console.log(`Month ${now.getMonth()}`)
// console.log(`Day ${now.getDate()}`)
// console.log(`Hours ${now.getHours()}`)
// console.log(`Mins ${now.getMinutes()}`)
// console.log(`Secs ${now.getSeconds()}`)
