/*eslint-env node */

var tracing = require(__dirname+'/../../../../tools/traces/trace.js');
var reload = require('require-reload')(require),
    participants = reload(__dirname+'/../../participants_info.js');

var read = function(req, res)
{
	participants = reload(__dirname+'/../../participants_info.js');
	tracing.create('ENTER', 'GET blockchain/participants/lease_companies', []);
	
	if(!participants.participants_info.hasOwnProperty('lease_companies'))
	{
		res.status(404)
		tracing.create('ERROR', 'GET blockchain/participants/lease_companies', 'Unable to retrieve lease companies');
		var error = {}
		error.message = 'Unable to retrieve lease companies';
		res.send(JSON.stringify(error))
	} 
	else
	{
		res.send(JSON.stringify({"result":participants.participants_info.lease_companies}))
	}
}
exports.read = read;