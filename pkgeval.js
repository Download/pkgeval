var log = require('ulog')('pkgeval')
var pkgcfg = require('pkgcfg');

function pkgeval(root, parents, node, expr) {
	if (expr) {
		log.debug(log.name + ': evaluating expression: ' + expr)
		try {return eval(expr)}
		catch(e) {throw new Error('Error evaluating expression (' + expr + '): ' + e.message);}
	}
}

pkgcfg.registry.register('eval', pkgeval);
module.exports = pkgeval;

log.debug('Initialized ' + log.name)
