// Imports go first
import { makePottery } from './PotteryWheel.js'

import { firePottery } from './Kiln.js'

import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'

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

let mugSold = toSellOrNotToSell(mug)
console.log(mugSold)

let plateSold = toSellOrNotToSell(plate)
console.log(plateSold)

let bowlSold = toSellOrNotToSell(bowl)
console.log(bowlSold)

let cupSold = toSellOrNotToSell(cup)
console.log(cupSold)

let vaseSold = toSellOrNotToSell(vase)
console.log(vaseSold)

let happyPlace = usePottery()
console.log(happyPlace)
// Invoke the component function that renders the HTML list


import {potteryList} from './PotteryList.js'

const parentHTMLElement = document.querySelector(".potteryList")
const finalProducts = potteryList()
 console.log(finalProducts)

//  parentHTMLElement.innerHTML = potteryList()

parentHTMLElement.innerHTML = potteryList()
