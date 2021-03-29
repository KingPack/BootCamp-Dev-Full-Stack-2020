window.addEventListener('load', () => {
    doMap()
    doFilter()
    doForEach()
    doReduce()
})

function doMap() {
    const nameEmailArray = peoples.results.map(person => {
        return {
            name: person.name,
            email: person.email,
        }
    })
    console.log(nameEmailArray)
    return nameEmailArray
}

function doFilter() {
    const olderThan30 = peoples.results.filter(person => {
        return person.dob.age > 30
    })
    console.log(olderThan30)
}

function doForEach() {
    const mappedPeople = doMap()

    mappedPeople.forEach (person => {
      person.nameSize = 
        person.name.title.length + 
        person.name.first.length + 
        person.name.last.length;
    })
    console.log(mappedPeople)
}

function doReduce() {
    const totalAges = person.results.reduce((accumulator, current) =>  {
        return accumulator + current
    })
}