export interface State {
  count: number
}

export interface IGetters {
  double: number
  expo2: number
  expo: (amount: number) => number
}

export interface IMutations {
  setCount: { amount: number }
  multi: number
  increment: void
}

export interface IActions {
  asyncSetCount: { amount: number }
  asyncMulti: number
  asyncIncrement: void
}
