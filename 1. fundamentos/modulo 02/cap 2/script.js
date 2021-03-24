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
    const olderThan30 = people.results.filter(person => {
        return person.dob.age > 30
    })
    console.log(olderThan30)
}