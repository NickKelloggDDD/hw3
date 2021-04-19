// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // save ride object details as variables
  let dropoffAddress = ride.dropoffLocation.address  
  let dropoffCity = ride.dropoffLocation.city
  let dropoffState = ride.dropoffLocation.state
  let dropoffZipCode = ride.dropoffLocation.zip
  let passengersTotal = ride.numberOfPassengers
  let passengerFirstName = ride.passengerDetails.first
  let passengerLastName = ride.passengerDetails.last
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber
  let pickupAddress = ride.pickupLocation.address
  let pickupCity = ride.pickupLocation.city
  let pickupState = ride.pickupLocation.state
  let pickupZipCode = ride.pickupLocation.zip
  let purple = ride.purpleRequested
  
  // declare the type of number as nothing
  let nooberType = ""

  // logic for determining if the Noober is Purple or XL
  if (purple == true) {nooberType = " Purple"}
  else if (passengersTotal >= 4) {nooberType = " XL"}
  
  // writes the ride information in human-readable format to the Javascript Console
  console.log(`Noober${nooberType} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pickup at ${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZipCode}. Drop-off at ${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZipCode}.`)
  
   // 🔥 YOUR CODE ENDS HERE 🔥
})


// Parse the data given in the random ride Object, and present it in human-readable format, for example: Noober X Passenger: Kiley Thompson - (260) 908-6886. Pickup at 1301 N State Pkwy, Chicago, IL 60624. Drop-off at 2362 N Clybourn Ave, Chicago, IL 60657.

// Approach the problem like we did in class – write the recipe (algorithm) using comments, then write the code according to the recipe.

// Create a well-named variable for each data point in the Object. For example, passengerFirstName. Then, use these variables to construct your string of output to be written to the JavaScript console.

// Use conditional logic – if the rider has requested the luxury "Purple" level of service, i.e. purpleRequested, display "Noober Purple" as the level of service, e.g. Noober Purple Passenger: Freeman Waters...

// If the numberOfPassengers in a single ride request is greater than 3, we'll need to upgrade to a larger car. Display "Noober XL" as the level of service.

// A request for Noober Purple supercedes the Noober XL logic. In other words, if a Noober Purple has been requested, it doesn't matter how many passengers there are. Anything else is the normal level of service, "Noober X".
