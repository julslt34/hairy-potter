

let idVariable= 1

export const makePottery = (shapePara, weightPara, heightPara) => {
let potteryObj = {
    shape: shapePara,
    weight: weightPara,
    height: heightPara,
    id: idVariable
}
idVariable++

return potteryObj
}


