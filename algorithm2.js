function countingValleys(n, s) {
  let elevation = 0;
  let traversedValleys = 0;
  for (let i = 0; i < n; i++) {
      if (s[i] === "D") {
          --elevation;
      } else if (s[i] === "U") {
          if (++elevation === 0) traversedValleys++;
      }
  }
  return traversedValleys;
}

let n_input = 8
let s_input = ["U","D","D","D","U","D","U","U"]

const calculate = countingValleys(n_input, s_input)

console.log(calculate)