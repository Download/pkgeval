var pkgcfg = require('pkgcfg');

function pkgeval(pkg, node, expr) {
	if (expr) {
		try {return eval(expr)}
		catch(e) {throw new Error('Error evaluating expression (' + expr + '): ' + e.message);}
	}
}

pkgcfg.registry.register('eval', pkgeval);
module.exports = pkgeval;
