var log = require('ulog')('pkgeval:spec')

var pkgcfg = require('pkgcfg')
var pkgeval = require('./pkgeval')
var expect = require('chai').expect

describe('pkgeval(root, parents, node, expr)', function(){
	it('is a function', function(){
		expect(pkgeval).to.be.a('function')
	})

	it('registers itself with `pkgcfg` under tag `eval{}`.', function(){
		expect(pkgcfg.registry.getTransform('eval')).to.equal(pkgeval)
	})

	describe('eval{<expr>}', function(){
		var pkg = pkgcfg()

		// "eval": "eval{3 > 5}",
		it('Evaluates the expression', function(){
			expect(pkg.test['eval']).to.equal(false)
		})

		// "eval-indirect": "eval{${test.data} > 5}",
		it('Resolves other tags, then evaluates the resulting expression', function(){
			expect(pkg.test['eval-indirect']).to.equal(true)
		})
	})
})

log.log('Initialized ' + log.name)
