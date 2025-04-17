import ky from 'ky';

export const API_BASE_URL = '/v1/';

const instance = ky.create({ credentials: 'include', retry: 0 });

export const kyInstance = import.meta.env.PROD
  ? instance.extend({ prefixUrl: `${location.origin}/v1/` })
  : instance.extend({ prefixUrl: API_BASE_URL });
