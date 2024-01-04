function isEmpty(x) {
	return (
		typeof x === 'undefined' ||
		typeof x === undefined ||
		x === null ||
		x === 'null' ||
		x === 'undefined' ||
		x === false ||
		x.length === 0 ||
		x === ''
	)
}

function isNotEmpty(x) {
	return !isEmpty(x)
}

function firstLetterCapitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function stringToBoolean(string) {
	switch (string) {
		case 'true':
		case 'yes':
		case '1':
		case 1:
			return true
		case 'false':
		case 'no':
		case '0':
		case 0:
		case null:
			return false
		default:
			return Boolean(string)
	}
}

const HELPER = {
	stringToBoolean,
	firstLetterCapitalize,
	isEmpty,
	isNotEmpty,
}
export default HELPER