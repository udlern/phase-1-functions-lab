function distanceFromHqInBlocks(pickUpLocation) {
  let headquartersStreet = 42;
  return Math.abs(pickUpLocation - headquartersStreet);
}


function distanceFromHqInFeet(pickUpLocation) {
  return distanceFromHqInBlocks(pickUpLocation) * 264
    
}

function distanceTravelledInFeet(pickUpLocation, dropOffLocation) {
  return Math.abs(pickUpLocation - dropOffLocation) * 264
}

function calculatesFarePrice(pickUpLocation, dropOffLocation) {
    let destinationInFeet = distanceTravelledInFeet(pickUpLocation, dropOffLocation);
    if (destinationInFeet <= 400) {
        return 0;
    } else if (destinationInFeet > 400 && destinationInFeet <= 2000) {
        return .02 * (destinationInFeet - 400)
    } else if (destinationInFeet > 2000 && destinationInFeet <= 2500) {
        return 25 
    } else if (destinationInFeet > 2500) {
        return 'cannot travel that far'
    }
}