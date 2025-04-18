import { useAtomValue } from 'jotai';
import { useMutation, useQuery } from '@tanstack/react-query';
import { accountClient, AccountEndpoint } from './account.client';
import { accessTokenAtom } from '../../store/auth';
import { PropensityReqeust, UserInfoResponse } from './account.model';

export const useGetUserInfoQuery = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  return useQuery<UserInfoResponse>({
    queryKey: ['userInfo'],
    queryFn: () =>
      accountClient.json(AccountEndpoint.getUserInfo(), {
        accessToken,
      }),
    enabled: !!accessToken,
  });
};

export const useSetPropensityMutation = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  return useMutation({
    mutationKey: ['propensityScore'],
    mutationFn: (data: PropensityReqeust) =>
      accountClient.statusCode(AccountEndpoint.setPropensity(data), [200], {
        accessToken,
      }),
  });
};
