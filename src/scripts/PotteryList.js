
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'

export const potteryList = () => {
    
    const sellingPottery = usePottery()

    let htmlString = '<article class="potteryList">'

    for (const sellingPiece of sellingPottery) {

htmlString += `<section class="pottery" id="pottery--1">
    <h2 class="pottery__shape">${sellingPiece.shape}</h2>
    <div class="pottery__properties">
    Item weighs ${sellingPiece.weight} grams and is ${sellingPiece.height} cm in height
    </div>
    <div class="pottery__price">
        Price is $${sellingPiece.price}
    </div>
</section>`
  }
  htmlString += `</article>`

  return htmlString
}

