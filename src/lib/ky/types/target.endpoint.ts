/* eslint-disable @typescript-eslint/no-explicit-any */

type TargetEndpointConfig = {
  method: 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete';
  headers?: Record<string, string>;
  pathParams?: Record<string, any>;
  params?: URLSearchParams;
  data?: Record<string, any>;

  timeout?: number;
  retry?: number;
};

export class TargetEndpoint {
  constructor(
    public path: string,
    public config: TargetEndpointConfig,
  ) {}
}
