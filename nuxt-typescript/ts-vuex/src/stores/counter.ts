import {Commit, Dispatch} from "vuex";

interface State {
  count: number
}

const state: State = {
  count: 0
}

// 実装には一切のインラインキャストが不要になり、全ての関数引数は型付与ずみの状態となる
interface IGetters {
  double: number
  expo2: number
  expo: (amount: number) => number
}

type Getters<S, G, RS = {}, RG = {}> = {
  [K in keyof G]: (state: S, getters: G) => G[K]
}

// あらかじめgettersの要件もinterfaceで明示する
const getters: Getters<State, IGetters> = {
  double(state) {
    return state.count * 2
  },
  expo2(state) {
    return state.count ** 2
  },
  expo(state) {
    return amount => state.count ** amount
  }
}

interface IMutations {
  setCount: { amount: number }
  multi: number
  increment: void
}

type Mutations<S, M> = {
  [K in keyof M]: (state: S, payload: M[K]) => void
}

// mutationも同じ作り
const mutations: Mutations<State, IMutations> = {
  setCount(state, payload) {
    state.count = payload.amount
  },
  multi(state, payload) {
    state.count = state.count * payload
  },
  increment(state) {
    state.count++
  }
}

interface IActions {
  asyncSetCount: { amount: number }
  asyncMulti: number
  asyncIncrement: void
}

type Actions<S, A, G = {}, M = {}, RS = {}, RG = {}> = {
  [K in keyof A]: (ctx: Context<S, A, G, M, RS, RG>, payload: A[K]) => any
}

type Commit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void
type Dispatch<A> = <T extends keyof A>(type: T, payload?: A[T]) => any

type Context<S, A, G, M, RS, RG> = {
  commit: Commit<M>
  dispatch: Dispatch<A>
  state: S
  getters: G
  rootState: RS
  rootGetters: RG
}

const actions: Actions<
  State,
  IActions,
  IGetters,
  IMutations,
  RootState,
  IRootGetters
> = {
  asyncSetCount(ctx, payload) {
    ctx.commit('setCount', { amount: payload.amount })
  },
  asyncMulti(ctx, payload) {
    ctx.commit('multi', payload)
  },
  asyncIncrement(ctx) {
    ctx.commit('increment')
  }
}

