import type { KyInstance, ResponsePromise } from 'ky';

import { TargetEndpoint } from '../types';

type RequestMeta = {
  accessToken?: string;
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
}
