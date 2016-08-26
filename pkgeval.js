var pkgcfg = require('pkgcfg');

function pkgeval(pkg, node, expr) {
	var result = '';
	if (expr) {
		try {result = eval(expr)}
		catch(e) {throw new pkgcfg.QuietError('Error evaluating expression (' + expr + '): ' + e.message);}
	}
	return result;
}

pkgcfg.registry.register('eval', pkgeval);

module.exports = pkgeval;
