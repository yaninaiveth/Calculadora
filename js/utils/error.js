
class BaseError extends Error {
	constructor(name,statusCode, isOperational, description){
		super(description)

		Object.setPrototypeOf(this, new.target.prototype)

		this.name = name;
		this.statusCode = statusCode;
		this.isOperational = isOperational;

		Error.captureStackTrace(this)
	}
}

class Api400Error extends BaseError {
	constructor(name,
		statusCode = httpsStatusCodes.BAD_REQUEST,
		description = 'that was a bad request',
		isOperational = false)
		{
		super(name,statusCode,isOperational,description)
	}
}

class Api401Error extends BaseError {
	constructor(name,
		statusCode = httpsStatusCodes.UNAUTHORIZED,
		description = 'Unauthorize',
		isOperational = true)
		{
		super(name,statusCode,isOperational,description)
	}
}

class Api404Error extends BaseError {
	constructor(
		name,
		statusCode = httpsStatusCodes.NOT_FOUND,
		description = 'Not found',
		isOperational = true)
		{
		super(name,statusCode,isOperational,description)
	}
}

class Api500Error extends BaseError {
	constructor(
		name,
		statusCode = httpsStatusCodes.INTERNAL_SERVER,
		description = 'internal server',
		isOperational = true)
		{
		super(name,statusCode,isOperational,description)
	}
}

