import { createStore, createLogger, Store as VuexStore } from 'vuex'
import state from './state';
import mutations from './mutations';
import actions from './actions';
import { IState } from '@/common/types/common';


export const store = createStore<IState>({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state,
  mutations,
  actions,
})