// Frequency Counter
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

// solution //

// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;

//   let countNum1 = {};
//   let countNum2 = {};

//   for(let i = 0; i < strNum1.length; i++){
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }

//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }

//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }

//   return true;
// }
