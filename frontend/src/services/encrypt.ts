declare var sha512: any;
declare var require: any;
var _sha512 = require('crypto-js/sha512.js');

export class Sha512 {
	// _sha512: any;

	constructor() {
		// this._sha512 = new sha512()
	}

	SHA512(message: string) {
		return _sha512(message);
	}
}
