const expandedNumber = num => {
    let pow = []
    let decimal = []
    num = num.toString().split('')
    let len = num.length
    for(let i = 0; i <= len - 1; i++){
        pow.unshift(i)
    }
    num.forEach((x,index) => {
        x = parseInt(x)
        decimal.push(x*10**pow[index])
    })
    let toDecimal = decimal.filter(a => a !== 0)
    return toDecimal.toString().split(',').join('\r\n')
};

var input = 1345679
console.log(expandedNumber(input))
