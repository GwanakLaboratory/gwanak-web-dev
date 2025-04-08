import ky from 'ky';

export const API_BASE_URL = 'http://127.0.0.1:8000/v1/';

const instance = ky.create({ credentials: 'include', retry: 0 });

export const kyInstance = import.meta.env.PROD
  ? instance.extend({ prefixUrl: API_BASE_URL })
  : instance.extend({ prefixUrl: `${location.origin}/v1/` });
