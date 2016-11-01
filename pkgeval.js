var log; try {log = require('ulog')('pkgeval')} catch(e) {}

var pkgcfg = require('pkgcfg');

function pkgeval(pkg, node, expr) {
	if (expr) {
		log && log.log(log.name + ': evaluating code: ' + expr)
		try {return eval(expr)}
		catch(e) {throw new Error('Error evaluating expression (' + expr + '): ' + e.message);}
	}
}

pkgcfg.registry.register('eval', pkgeval);
module.exports = pkgeval;

log && log.log('Initialized ' + log.name)
