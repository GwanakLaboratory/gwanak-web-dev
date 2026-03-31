import type { KyInstance, ResponsePromise } from 'ky';

import { TargetEndpoint } from '../types';
import { HTTPError } from 'ky';
import { accessTokenAtom, jotaiStore } from '../../../store/auth';

type RequestMeta = {
  accessToken: null | string;
  locale?: string;
  deviceId?: string;
  platform?: 'web' | 'ios' | 'android';
};

export class BaseClient {
  constructor(private readonly instance: KyInstance) {}

  async json<T>(endpoint: TargetEndpoint, meta?: RequestMeta): Promise<T> {
    try {
      const response = await this.getResponse<T>(endpoint, meta);
      return response.json();
    } catch (e) {
      if (e instanceof HTTPError) {
        const status = e.response.status;
        if (status === 401) {
          try {
            const accessToken = await this.refreshAcceessToken();
            jotaiStore.set(accessTokenAtom, accessToken);
            const newMeta = { ...meta, accessToken: accessToken };
            const response = await this.getResponse<T>(endpoint, newMeta);
            return response.json();
          } catch (e) {
            window.dispatchEvent(new Event('FORCE_LOGOUT'));
            throw new Error(`API_ERROR: ${e}`);
          }
        } else if (status === 403) {
          throw new Error(`API_ERROR: ${e}`);
        }
      }
      throw new Error(`API_ERROR: ${e}`);
    }
  }

  async statusCode(
    endpoint: TargetEndpoint,
    statusCodes: [number],
    meta?: RequestMeta,
  ): Promise<boolean> {
    try {
      const response = await this.getResponse(endpoint, meta);
      return statusCodes.includes(response.status);
    } catch (e) {
      if (e instanceof HTTPError) {
        const status = e.response.status;
        if (status === 401) {
          try {
            const accessToken = await this.refreshAcceessToken();
            jotaiStore.set(accessTokenAtom, accessToken);
            const newMeta = { ...meta, accessToken: accessToken };
            const response = await this.getResponse(endpoint, newMeta);
            return statusCodes.includes(response.status);
          } catch (e) {
            window.dispatchEvent(new Event('FORCE_LOGOUT'));
            throw new Error(`API_ERROR: ${e}`);
          }
        } else if (status === 403) {
          throw new Error(`API_ERROR: ${e}`);
        }
      }
      throw new Error(`API_ERROR: ${e}`);
    }
  }

  private async getResponse<T>(
    endpoint: TargetEndpoint,
    meta?: RequestMeta,
  ): Promise<ResponsePromise<T>> {
    let path = endpoint.path;

    if (path.startsWith('/')) path = path.slice(1);

    if (endpoint.config.pathParams) {
      Object.entries(endpoint.config.pathParams).forEach(
        ([key, value]) => (path = path.replace(`:${key}`, value)),
      );
    }

    const headers = {
      ...endpoint.config.headers,
      ...(meta?.accessToken && {
        Authorization: `Bearer ${meta.accessToken}`,
      }),
      ...(meta?.locale && {
        'X-Locale': meta.locale,
      }),
      ...(meta?.deviceId && {
        'X-Device-Id': meta.deviceId,
      }),
      ...(meta?.platform && {
        'X-Platform': meta.platform,
      }),
    };

    return this.instance(path, {
      method: endpoint.config.method,
      json: endpoint.config.data,
      headers: headers,
      searchParams: endpoint.config.params,
      retry: endpoint.config.retry ?? 3,
      timeout: endpoint.config.timeout ?? 3000,
    });
  }

  async refreshAcceessToken(): Promise<string> {
    const endpoint = new TargetEndpoint('/account/refresh/', {
      method: 'post',
    });
    const res = await this.getResponse(endpoint);
    const json: { detail: { access_token: string } } = await res.json();
    return json.detail.access_token;
  }
}
