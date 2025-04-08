import type { BeforeRequestHook } from 'ky';

const beforeRequest: BeforeRequestHook = (request) => {
  return request;
};
export default beforeRequest;
