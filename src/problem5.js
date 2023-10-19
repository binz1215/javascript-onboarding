const moneyKind = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]

function problem5(money) {
  const moneyAmount = new Array(9).fill(0)
  
  for (let kind = 0; kind < moneyKind.length; kind++) {
    moneyAmount[kind] = Math.floor(money / moneyKind[kind]) // 같거나 가장 큰 정수
    money %= moneyKind[kind] 
  } 
  
  return moneyAmount
}

module.exports = problem5;
//youzysu