import type { BeforeErrorHook } from 'ky';

import { IErrorResponse } from '../config/error';

const beforeError: BeforeErrorHook = async (error) => {
  const customError = error as IErrorResponse;
  if (customError.status === 401) {
    console.error(customError.message);
    // TODO: 토큰 만료시 리프레시 토큰으로 재호출
    // TODO: 이후 에러시 로그아웃

    return customError;
  }
  return customError;
};

export default beforeError;
