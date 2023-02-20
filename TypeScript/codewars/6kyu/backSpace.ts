// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// pass //

function cleanString(s: string) {
	while (/#/.test(s)) {
		const i = s.indexOf('#')
		if (i === 0) s = s.slice(1)
		else s = s.slice(0, i - 1) + s.slice(i + 1)
	}
	return s
}
