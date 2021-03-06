var
	furthermore = require('../index')
	;

function builder(yargs) {}

function handler(argv)
{
	furthermore.setConfig(argv.env);

	furthermore.all(function(err, current)
	{
		furthermore._handleError(err);

		// We have opinions about our data formats.
		var keys = Object.keys(current).sort();
		var output = {};
		keys.forEach(function(k) { output[k] = current[k]; });
		console.log(JSON.stringify(output, null, 4));
	});
}

module.exports = {
	command: 'backup',
	describe: 'emit all keys in the given db as a json object',
	builder: builder,
	handler: handler
};
