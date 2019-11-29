export const ID_KEY = localStorage;
export const isAuthenticated = () => localStorage.getItem('user') != null;
export const getId = () => localStorage.getItem(ID_KEY);
export const login = _id => {
  localStorage.setItem(ID_KEY, _id);
};

export const logout = () => {
  localStorage.removeItem(ID_KEY);
};

