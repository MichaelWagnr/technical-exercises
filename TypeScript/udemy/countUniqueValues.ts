// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time.

// pass //

function countUniqueValues(arr: number[] | never[]) {
	if (!arr[0]) return 0

	let i = 0
	let j = 0

	while (j <= arr.length - 1) {
		if (arr[i] === arr[j]) {
			j++
		} else {
			i++
			arr[i] = arr[j]
		}
	}

	return i + 1
}

// TESTS ============================================================
console.log('expected: 2, received:', countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(
	'expected: 7, received:',
	countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
)
console.log('expected: 0, received:', countUniqueValues([]))
console.log('expected: 4, received:', countUniqueValues([-2, -1, -1, 0, 1]))
// ==================================================================
