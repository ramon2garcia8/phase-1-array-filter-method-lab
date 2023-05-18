// Code your solution here
function findMatching(driversNames, matchingName) { 
   const drivers = driversNames.filter(value => value.toLowerCase() === matchingName.toLowerCase())
   return drivers
}

function fuzzyMatch(driversNames, matchingName) {
    const drivers = driversNames.filter(value => value.startsWith(matchingName))
    return drivers
}

function matchName(driversObj, matchingName) {
    const drivers = driversObj.filter(obj => obj.name === matchingName)
    return drivers
}
