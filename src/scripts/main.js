// Imports go first
import { makePottery } from './PotteryWheel.js'

import { firePottery } from './Kiln.js'

// Make 5 pieces of pottery at the wheel
// let mug = makePottery()

let mug = makePottery('Mug', 2.0, 3)
console.log(mug)

let plate = makePottery('Plate', 2.5, 2)
console.log(plate)

let bowl = makePottery('Bowl', 4.5, 5)
console.log(bowl)

let cup = makePottery('Cup', 1.5, 2)
console.log(cup)

let vase = makePottery('Vase', 5, 9)
console.log(vase)



// Fire each piece of pottery in the kiln
let mugFired = firePottery(mug, 2300)
console.log(mugFired)

let plateFired = firePottery(plate, 1800)
console.log(plateFired)

let bowlFired = firePottery(bowl, 2500)
console.log(bowlFired)

let cupFired = firePottery(cup, 1900)
console.log(cupFired)

let vaseFired = firePottery(vase, 2000)
console.log(vaseFired)


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



