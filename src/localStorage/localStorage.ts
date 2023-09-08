export const saveJWTToLocalStorage = (jwtValue: string) => {
  localStorage.setItem('jwt', jwtValue);
};
export const getJWTToLocalStorage = () => {
  return localStorage.getItem('jwt');
};
