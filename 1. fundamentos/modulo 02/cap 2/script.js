window.addEventListener('load', () => {
    doMap()
    doFilter()
})

function doMap() {
    const nameEmailArray = people.results.map(person => {
        return {
            name: person.name,
            email: person.email
        }
    })
    console.log(nameEmailArray)
}

function doFilter() {
    const olderThan18 = people.results.filter(person => {
        return person.dob.age > 18
    })
    console.log(olderThan18)
}