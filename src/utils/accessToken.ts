export const setTokenStorage = (token: string) => localStorage.setItem('login-token', token);
export const getTokenStorage = (tokenName: string) => localStorage.getItem(tokenName);
export const removeTokenStorage = () => localStorage.removeItem('login-token');
