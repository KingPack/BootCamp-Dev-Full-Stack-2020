window.addEventListener('load', () => {
    doMap()
    doFilter()
    doForEach()
})

function doMap() {
    const nameEmailArray = peoples.results.map(person => {
        return {
            name: person.name,
            email: person.email,
            postcod: person.postcod
        }
    })
    console.log(nameEmailArray)
}

function doFilter() {
    const olderThan30 = peoples.results.filter(person => {
        return person.dob.age > 30
    })
    console.log(olderThan30)
}

function doForEach(){
    const mappedPeople = doMap()

    mappedPeople.doForEach(person => {
        person.nameSize = person.title + person.first + person.last
    })
    console.log
}