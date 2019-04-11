import * as authModule from './auth';
import * as rootModule from './root';

export type State = authModule.State;

export const routes = [authModule.routes, rootModule.routes];
export const stores = [authModule.stores];

export default {
  routes,
  stores
};