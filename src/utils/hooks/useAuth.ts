export const useAuth = () => {
  //TODO: Hardocode for demo
  const login = (isAdmin: boolean) => {
    localStorage.setItem('role', isAdmin ? 'admin' : 'user');
  };

  const logout = () => {
    localStorage.removeItem('role');
  };

  const isAdmin = (): boolean => {
    const role = localStorage.getItem('role');
    return role === 'admin';
  };
  return {
    login,
    logout,
    isAdmin,
  };
};
