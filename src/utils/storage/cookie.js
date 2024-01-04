import Cookies from 'universal-cookie'

const cookies = new Cookies()
// Set expiry time
var days = parseInt(process.env.NEXT_PUBLIC_COOKIE_EXPIRY)
var expiry = new Date()
expiry.setDate(expiry.getDate() + days)
let cookieSettings = {
		path: '/',
		expires: expiry,
		domain: 'localhost',
		sameSite: 'lax',
	}


/**
 *
 * COOKIE STORAGE SERVICE
 */

function _getAccessToken() {
	return cookies.get('access_token')
}
function _updateAccessToken(access_token) {
	cookies.set('access_token', access_token, cookieSettings)
}
function _removeAccessToken() {
	if (cookies.get('access_token') !== undefined) {
		return cookies.remove('access_token', cookieSettings)
	}
}

export const COOKIE_STORAGE_SERVICE = {
	_getAccessToken,
	_updateAccessToken,
	_removeAccessToken,
}