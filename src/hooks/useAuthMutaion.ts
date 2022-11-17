import { useMutation } from "@tanstack/react-query";
import { authAPI } from '../api/authAPI';

export const useAuthMutaion = () => {

  return useMutation(authAPI.login);
};