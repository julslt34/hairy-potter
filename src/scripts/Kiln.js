
export const firePottery = (potteryObj, tempPara) => {
    potteryObj.fired = true
    if (tempPara > 2200){potteryObj.cracked = true}
     else {potteryObj.cracked = false} 
    
    
    return potteryObj
    }
    

