// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// DATE TIMEMATHEMATICSALGORITHMS

// pass //

function humanReadable(seconds: number) {
	let secondsRemaining: number | string = seconds
	let hours: number | string = Math.floor(secondsRemaining / 60 / 60)
	secondsRemaining -= hours * 60 * 60
	let minutes: number | string = Math.floor(secondsRemaining / 60)
	secondsRemaining -= minutes * 60

	hours = hours.toString().padStart(2, '0')
	minutes = minutes.toString().padStart(2, '0')
	secondsRemaining = secondsRemaining.toString().padStart(2, '0')

	return `${hours}:${minutes}:${secondsRemaining}`
}

// solution //

// function humanReadable(seconds) {
//   var pad = function(x) { return (x < 10) ? "0"+x : x; }
//   return pad(parseInt(seconds / (60*60))) + ":" +
//          pad(parseInt(seconds / 60 % 60)) + ":" +
//          pad(seconds % 60)
// }
