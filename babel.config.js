module.exports = {
	presets: [
		['@babel/preset-env', {
			targets: {
				chrome: '58',
				ie: '11',
			},
			useBuiltIns: 'usage',
			corejs: {
				version: 3,
			}
		}]
	]
};