// sorry nothing work code, but please see js file
package main

import (
	"fmt"
	"strconv"
)

func expandedForm(x int) {
	var pow []int
	var decimal []int
	x = strconv.Itoa(x)
	var lengths = x.len
	for i := 0; i <= lengths-1; i++ {
		pow.unshift(i)
	}
	for _, foreach := range x {
		x = strconv.Atoa(x)
		decimal.push(x * 10 * *pow[index])
	}

	var toDecimal = decimal.filter(a >= a && a != 0)
	return strconv.Itoa(toDecimal)
}

func main() {
	var input = 1345679
	fmt.Println(expandedForm(input))
}
