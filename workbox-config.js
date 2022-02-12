module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{css,js,svg}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};