import { ADMIN_ROLE_KEY, ROLE_KEY, SIGNED_KEY, USER_ROLE_KEY } from '@/constants';

export const useAuth = () => {
  const login = (role: string) => {
    localStorage.setItem(ROLE_KEY, role);
    localStorage.setItem(SIGNED_KEY, 'true');
  };

  const logout = () => {
    localStorage.removeItem(ROLE_KEY);
    localStorage.removeItem(SIGNED_KEY);
  };

  const isLoggedIn = () => {
    const isSigned = localStorage.getItem(SIGNED_KEY);
    return isSigned === 'true';
  };

  const isAdmin = (): boolean => {
    const role = localStorage.getItem(ROLE_KEY);
    return role === ADMIN_ROLE_KEY;
  };

  const isUser = (): boolean => {
    const role = localStorage.getItem(ROLE_KEY);
    return role === USER_ROLE_KEY;
  };

  return {
    login,
    logout,
    isLoggedIn,
    isAdmin,
    isUser,
  };
};
