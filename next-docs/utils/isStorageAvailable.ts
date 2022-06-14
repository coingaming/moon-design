type Type = 'sessionStorage' | 'localStorage';

const isStorageAvailable = (type: Type) => {
  try {
    window.sessionStorage;
    const storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
};

export default isStorageAvailable;
