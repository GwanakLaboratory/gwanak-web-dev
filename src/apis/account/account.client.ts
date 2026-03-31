import { BaseClient, TargetEndpoint } from '../../lib/ky';
import { kyInstance } from '../instance';
import { PropensityReqeust } from './account.model';

export const accountClient = new BaseClient(kyInstance);

export class AccountEndpoint extends TargetEndpoint {
  public static getUserInfo = () =>
    new AccountEndpoint('/account/info', {
      method: 'get',
    });
  public static setPropensity = (data: PropensityReqeust) =>
    new AccountEndpoint('/account/propensity/', { method: 'post', data: data });
}
