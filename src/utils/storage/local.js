function _saveToLocalStorage(key, value) {
	localStorage.setItem(key, value);
}

function _getFromLocalStorage(key) {
  if (typeof window !== 'undefined') {
	return localStorage.getItem(key);
  }
  return null;
}

function _updateInLocalStorage(key, value) {
	localStorage.setItem(key, value)
}

function _deleteFromLocalStorage(key) {
	localStorage.removeItem(key)
}
function _clearLocalStorage() {
	localStorage.clear()
}


export const LOCAL_STORAGE_SERVICE = {
	_saveToLocalStorage,
	_getFromLocalStorage,
	_updateInLocalStorage,
	_deleteFromLocalStorage,
	_clearLocalStorage,
}