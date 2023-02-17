// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

// pass //

function inArray(a1: string[], a2: string[]): string[] {
	const result: any = []

	a1.forEach((str1) => {
		const regex = new RegExp(`${str1}`)
		if (a2.some((str2) => regex.test(str2))) {
			result.push(str1)
		}
	})

	return result.sort()
}

// solution //

// function inArray(a1: string[], a2: string[]): string[] {
//   return [...(new Set(a1.filter(str => a2.some(str2 => str2.includes(str))).sort()))]
// }
