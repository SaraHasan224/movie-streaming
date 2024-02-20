function _saveToLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

function _getFromLocalStorage(key: string) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
}

function _updateInLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

function _deleteFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}
function _clearLocalStorage() {
  localStorage.clear();
}

export const LOCAL_STORAGE_SERVICE = {
  _saveToLocalStorage,
  _getFromLocalStorage,
  _updateInLocalStorage,
  _deleteFromLocalStorage,
  _clearLocalStorage,
};
