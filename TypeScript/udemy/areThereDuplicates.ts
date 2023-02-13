// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

// pass //

type args = string[] | number[]

function areThereDuplicates(...args: args) {
	const freqCount = {}

	args
		.map((arg) => arg.toString())
		.forEach((arg) => (freqCount[arg] = (freqCount[arg] + 1) | 1))

	for (const arg in freqCount) {
		if (freqCount[arg] > 1) return true
	}

	return false
}

// TESTS ============================================================
console.log('expected: false, received:', areThereDuplicates(1, 2, 3))
console.log('expected: true, received:', areThereDuplicates(1, 2, 2))
console.log('expected: true, received:', areThereDuplicates('a', 'b', 'c', 'a'))
// ==================================================================
