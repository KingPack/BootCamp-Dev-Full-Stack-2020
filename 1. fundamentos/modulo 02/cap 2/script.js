window.addEventListener('load', () => {
    doMap()
    doFilter()
})

function doMap() {
    const nameEmailArray = peoples.results.map(person => {
        return {
            name: person.name,
            email: person.email
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