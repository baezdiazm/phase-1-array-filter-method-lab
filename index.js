// Code your solution here

function findMatching(collection, inquiry) {
    return collection.filter(
        (element) => element.toUpperCase() === inquiry.toUpperCase()
        )
    console.log(result)
}
    
function fuzzyMatch(collection, provided) {
    return collection.filter(
        (element) => element.toUpperCase().indexOf(provided.toUpperCase()) === 0
        )
}

function matchName(collection, provided) {
    return collection.filter(
        (element) => element.name === provided
    )
}
        
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
fuzzyMatch(drivers, "b")