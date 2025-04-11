import { useMutation } from '@tanstack/react-query';
import {
  AuthSignInRequest,
  AuthSignInResponse,
  AuthSignUpRequest,
} from './auth.model';
import { authClient, AuthEndpoint } from './auth.client';
import { useAtom, useSetAtom } from 'jotai';
import { accessTokenAtom } from '../../store/auth';

export const useSignInMutation = () => {
  const setAccessToken = useSetAtom(accessTokenAtom);
  return useMutation<AuthSignInResponse, Error, AuthSignInRequest>({
    mutationKey: ['auth', 'signin'],
    mutationFn: (data: AuthSignInRequest) =>
      authClient.json(AuthEndpoint.signIn(data)),
    onSuccess: (data) => {
      setAccessToken(data.detail.access_token);
    },
  });
};

export const useSignOutMutation = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  return useMutation({
    mutationKey: ['auth', 'signout'],
    mutationFn: () =>
      authClient.statusCode(AuthEndpoint.singOut(), [200], {
        accessToken: accessToken ?? undefined,
      }),
    onSuccess: () => {
      setAccessToken(null);
    },
  });
};
export const useSignUpMutation = () =>
  useMutation({
    mutationKey: ['auth', 'signup'],
    mutationFn: (data: AuthSignUpRequest) =>
      authClient.statusCode(AuthEndpoint.singUp(data), [200]),
  });

export const useRefreshTokenMutation = () => {
  const setAccessToken = useSetAtom(accessTokenAtom);
  return useMutation<string>({
    mutationKey: ['auth', 'token'],
    mutationFn: () => authClient.refreshAcceessToken(),
    onSuccess: (data) => setAccessToken(data),
  });
};
