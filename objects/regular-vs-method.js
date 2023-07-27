// Same task using two different approaches
// PART I: Method

let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (size) {
        this.guestCount += size
    },
    removeParty: function (size) {
        this.guestCount -= size
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

// PART II : Non-Method

// let restaurant = {
//     name: 'ASB',
//     guestCapacity: 75,
//     guestCount: 0,
// }

// let seatParty = function (size) {
//     restaurant.guestCount += size
// }

// let removeParty = function (size) {
//     restaurant.guestCount -= size
// }

// let checkAvailability = function (partySize) {
//     let seatsLeft = restaurant.guestCapacity - restaurant.guestCount
//     return partySize <= seatsLeft
// }

// seatParty(72)
// console.log(checkAvailability(4))
// removeParty(5)
// console.log(checkAvailability(4))