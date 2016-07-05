var Q = require( 'q' );

var isiQ = function (maxAmount, timeout, title) {
	this.freeSemaphores = maxAmount;
	this.timeout        = timeout;
	this.title          = title;
};

isiQ.prototype = {
	constructor : isiQ,

	freeSemaphores : 0,
	timeout        : 0,
	title          : '',

	reserveSemaphore : function () {
		var self     = this;
		var deferred = Q.defer();
		var interval = undefined;

		var reserve = function () {
			if (self.freeSemaphores > 0) {
				--self.freeSemaphores;

				if (interval != undefined) {
					clearInterval( interval );
				}

				deferred.resolve( self.title );
				return true;
			}

			return false;
		};

		if (!reserve()) {
			interval = setInterval( reserve, self.timeout );
		}

		return deferred.promise;
	},

	resolveSemaphore : function (obj) {
		var self = this;
		++self.freeSemaphores;
		return Q.resolve( obj );
	}
};

module.exports = isiQ;