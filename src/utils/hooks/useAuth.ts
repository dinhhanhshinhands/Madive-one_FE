import { ADMIN_ROLE_KEY, ROLE_KEY } from '@/constants';

export const useAuth = () => {
  const loggedIn = (role: string) => {
    localStorage.setItem(ROLE_KEY, role);
  };

  const logout = () => {
    localStorage.removeItem(ROLE_KEY);
  };

  const isAdmin = (): boolean => {
    const role = localStorage.getItem(ROLE_KEY);
    return role === ADMIN_ROLE_KEY;
  };

  return {
    loggedIn,
    logout,
    isAdmin,
  };
};
