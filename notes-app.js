let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4()

    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value)
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)        
    }
})

const now = moment()
console.log(now.format('Qo MMMM YYYY' ))

const nowTimeStap = now.valueOf()
console.log(moment(nowTimeStap).toString())

const newNow = moment()
newNow.year(1983).month(0).day(13);       
console.log(newNow.format('Qo MMMM YYYY' ))