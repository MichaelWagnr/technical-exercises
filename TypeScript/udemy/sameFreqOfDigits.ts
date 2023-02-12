//: Frequency Counter
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// pass //

function sameFrequency(num1: number, num2: number) {
	//Split number into digits
	const arrOfDigits1 = num1.toString().split('')
	const arrOfDigits2 = num2.toString().split('')
	//Gaurd if numbers do not have matching length
	if (arrOfDigits1.length !== arrOfDigits2.length) return false
	//Create a frequency counter for each digit
	const freqCount1 = {}
	arrOfDigits1.forEach(
		(digit) => (freqCount1[digit] = freqCount1[digit] + 1 || 1)
	)
	const freqCount2 = {}
	arrOfDigits2.forEach(
		(digit) => (freqCount2[digit] = freqCount2[digit] + 1 || 1)
	)
	//Check for overlap
	for (const key in freqCount1) {
		if (!freqCount2[key]) return false
		freqCount2[key]--
	}

	return true
}

// TESTS ============================================================
console.log('expected: true, received:', sameFrequency(182, 281))
console.log('expected: false, received:', sameFrequency(34, 14))
console.log('expected: true, received:', sameFrequency(3589578, 5879385))
console.log('expected: false, received:', sameFrequency(22, 222))
// ==================================================================
