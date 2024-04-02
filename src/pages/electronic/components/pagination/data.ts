// empty -
// default -
// increment -
// middle -
// decrements -

export function findFirstType(pages: number) {
	if (pages === 1) {
		return 'empty'
	} else if (pages <= 7 && pages > 1) {
		return 'default'
	} else if (pages > 7) {
		return 'increment'
	}
	return 'empty'
}

export function createData(type: string, pages: number, index: number) {
	switch (type) {
		case 'empty':
			return null
		case 'default':
			return defaultData(pages)
		case 'increment':
			return incrementData(pages)
		case 'decrement':
			return decrementData(pages)
		case 'middle':
			return middleData(pages, index)
		default:
			return null
	}
}

export function defaultData(pages: number) {
	let data = []
	for (let i = 1; i <= pages; i++) {
		data.push(i)
	}
	return data
}

export function incrementData(pages: number) {
	return [1, 2, 3, 4, 5, 'jumpNext', pages]
}

export function decrementData(pages: number) {
	return [1, 'jumpBack', pages - 4, pages - 3, pages - 2, pages - 1, pages]
}

export function middleData(pages: number, index: number) {
	return [1, 'jumpBack', index - 1, index, index + 1, 'jumpNext', pages]
}
