import { useMutation, useQuery } from '@tanstack/react-query';
import {
  PortfolioInfoResponse,
  PortfolioRequest,
  PortfolioResponse,
  PortfolioUpdateRequest,
} from './portfolio.model';
import { portfolioClient, PortfolioEndpoint } from './portfolio.client';
import { useAtomValue } from 'jotai';
import { accessTokenAtom } from '../../store/auth';

export const useCreatePortfolio = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  return useMutation<PortfolioResponse, Error, PortfolioRequest>({
    mutationFn: (data) =>
      portfolioClient.json(PortfolioEndpoint.createPortolio(data), {
        accessToken,
      }),
  });
};

export const useGetPortfolio = ({ portfolioId }: { portfolioId: string }) => {
  const accessToken = useAtomValue(accessTokenAtom);
  return useQuery<PortfolioInfoResponse>({
    queryKey: ['portfolio', portfolioId],
    queryFn: () =>
      portfolioClient.json(PortfolioEndpoint.getPortfolio(portfolioId), {
        accessToken,
      }),
    enabled: !!accessToken && !!portfolioId,
  });
};

export const useUpdatePortfolio = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  return useMutation({
    mutationFn: (data: PortfolioUpdateRequest) =>
      portfolioClient.json(PortfolioEndpoint.updatePortfolio(data), {
        accessToken,
      }),
  });
};
