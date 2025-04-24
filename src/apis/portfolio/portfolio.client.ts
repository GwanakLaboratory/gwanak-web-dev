import { BaseClient, TargetEndpoint } from '../../lib/ky';
import { AuthEndpoint } from '../auth';
import { kyInstance } from '../instance';
import { PortfolioRequest, PortfolioUpdateRequest } from './portfolio.model';

export const portfolioClient = new BaseClient(kyInstance);

export class PortfolioEndpoint extends TargetEndpoint {
  public static createPortolio = (data: PortfolioRequest) =>
    new AuthEndpoint('/portfolio/', { method: 'post', data: data });

  public static getPortfolio = (portfolioId: string) =>
    new AuthEndpoint('/portfolio/:portfolioId/', {
      method: 'get',
      pathParams: { portfolioId },
    });

  public static updatePortfolio = (data: PortfolioUpdateRequest) =>
    new AuthEndpoint('/portfolio/:portfolioId/', {
      method: 'put',
      pathParams: { portfolioId: data.portfolioId },
      data: { title: data.title, total_money: data.account },
    });
}
