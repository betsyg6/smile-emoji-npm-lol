function smile(string) {
	if (typeof string !== 'string')
		throw new TypeError('i need a string please!');
	return string.replace(/\s/g, '😆');
}

module.exports = smile;
