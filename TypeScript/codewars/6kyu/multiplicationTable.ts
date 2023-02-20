// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// pass //

function multiplicationTable(size: number) {
	const result = []

	for (let i = 1; i <= size; i++) {
		let subArr = new Array(size).fill(i)
		subArr = subArr.map((val, j) => val * (j + 1))
		result.push(subArr)
	}

	return result
}

// solution //

// const multiplicationTable=s=>Array(s).fill().map((a,i)=>Array(s).fill().map((e,j)=>(1+i)*(1+j)))
