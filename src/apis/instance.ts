import ky from 'ky';

const DEV_API_BASE_URL = '/v1/';
const PROD_API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://api.gwanaklab.com/v1/';

function ensureTrailingSlash(url: string): string {
  return url.endsWith('/') ? url : `${url}/`;
}

export const API_BASE_URL = import.meta.env.PROD
  ? ensureTrailingSlash(PROD_API_BASE_URL)
  : DEV_API_BASE_URL;

const instance = ky.create({ credentials: 'include', retry: 0 });

export const kyInstance = instance.extend({ prefixUrl: API_BASE_URL });
