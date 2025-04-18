import { BaseClient, TargetEndpoint } from '../../lib/ky/index.ts';
import { kyInstance } from '../instance.ts';
import {
  AuthKaKaoInfoViewModel,
  AuthKaKaoValidateRequest,
  AuthSignInRequest,
  AuthSignUpRequest,
} from './auth.model.ts';
import { encodeKaKaoValidateRequest } from './auth.transform.ts';

export const authClient = new BaseClient(kyInstance);

export class AuthEndpoint extends TargetEndpoint {
  public static signIn = (data: AuthSignInRequest) =>
    new AuthEndpoint('/account/login/', {
      method: 'post',
      data: data,
    });

  public static singOut = () =>
    new AuthEndpoint('/account/logout/', {
      method: 'post',
    });

  public static singUp = (data: AuthSignUpRequest) =>
    new AuthEndpoint('/account/signup/', {
      method: 'post',
      data: data,
    });
  public static kakaoInfoCheck = (data: AuthKaKaoInfoViewModel) =>
    new AuthEndpoint('/cert/request/', {
      method: 'post',
      data: encodeKaKaoValidateRequest(data),
    });
  public static kakaoValidate = (data: AuthKaKaoValidateRequest) =>
    new AuthEndpoint('/cert/check/', {
      method: 'post',
      data: data,
    });
}
