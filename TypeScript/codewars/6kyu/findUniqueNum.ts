// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// pass //

function findUniq(arr: number[]) {
	const freq = {}
	arr.forEach((num) =>
		freq[num] ? (freq[num] = freq[num] + 1) : (freq[num] = 1)
	)
	const result = Object.keys(freq).filter((key) => freq[key] === 1)[0]
	return +result
}
