export const getAccountNumber = () => {
  return (Math.floor(Math.random() * 899999999999) + 100000000000).toString();
};
