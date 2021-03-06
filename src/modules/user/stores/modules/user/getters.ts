import { State as AppState } from '../../..';
import { GetterTree } from 'vuex';
import { State } from './state';
import { UserActionTypes } from './types';

export interface Getters<S, R> extends GetterTree<S, R> {
  [UserActionTypes.IS_LOGGED_IN]: (state: S) => boolean;
}

export const getters: Getters<State, AppState> = {
  [UserActionTypes.IS_LOGGED_IN](state: State) {
    return state.isLoggedIn;
  }
};
