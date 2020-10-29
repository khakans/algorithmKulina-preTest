function sockMerchant(n, ar) {
    let socks = {};
    let pairs = 0;
  for (let n of ar) {
    socks[n] = socks[n] + 1 || 1;
      if (socks[n] % 2 === 0) {
        pairs += 1;
      }
    }
  return pairs;
}

let n_input = 9
let ar_input = [10,20,20,10,10,30,50,10,20]

const calculate = sockMerchant(n_input, ar_input)

console.log(calculate)