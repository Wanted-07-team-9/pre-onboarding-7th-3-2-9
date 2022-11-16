import { IQueries } from 'core/states';

export const getAccountPath = ({ page, limit, broker, active, status, q }: IQueries) => {
  return `accounts?page=${page || 1}&limit=${limit || 10}&broker=${broker || ''}&active=${
    active || ''
  }&status=${status || ''}&q=${q || ''}`;
};
