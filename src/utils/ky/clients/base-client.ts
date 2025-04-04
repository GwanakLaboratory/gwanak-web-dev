import type { KyInstance, ResponsePromise } from 'ky';

import { TargetEndpoint } from '../types';

export class BaseClient {
  constructor(private readonly instance: KyInstance) {}

  async json<T>(endpoint: TargetEndpoint): Promise<T> {
    try {
      const response = await this.getResponse<T>(endpoint);
      return response.json();
    } catch (e) {
      throw new Error(`API_ERROR: ${e}`);
    }
  }

  async statusCode(
    endpoint: TargetEndpoint,
    statusCodes: [number],
  ): Promise<boolean> {
    try {
      const response = await this.getResponse(endpoint);
      return statusCodes.includes(response.status);
    } catch (e) {
      throw new Error(`API_ERROR: ${e}`);
    }
  }

  private async getResponse<T>(
    endpoint: TargetEndpoint,
  ): Promise<ResponsePromise<T>> {
    let path = endpoint.path;

    if (path.startsWith('/')) path = path.slice(1);

    if (endpoint.config.pathParams) {
      Object.entries(endpoint.config.pathParams).forEach(
        ([key, value]) => (path = path.replace(`:${key}`, value)),
      );
    }

    return this.instance(path, {
      method: endpoint.config.method,
      json: endpoint.config.data,
      headers: endpoint.config.headers,
      searchParams: endpoint.config.params,
      retry: endpoint.config.retry ?? 3,
      timeout: endpoint.config.timeout ?? 3000,
    });
  }
}
