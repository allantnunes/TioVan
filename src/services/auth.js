export const isAuthenticated = ()  => localStorage.getItem('user') != null;
export const login = _id => {
    localStorage.setItem('user', _id);
  };

