import { AUTHENTICATED_KEY } from '@/constants';

export const useAuth = () => {
  const login = () => {
    localStorage.setItem(AUTHENTICATED_KEY, 'true');
  };

  const logout = () => {
    localStorage.removeItem(AUTHENTICATED_KEY);
  };

  const isAuthenticated = () => {
    return localStorage.getItem(AUTHENTICATED_KEY) === 'true';
  };

  return {
    login,
    logout,
    isAuthenticated,
  };
};
