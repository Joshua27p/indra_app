import { AUTH_LOGIN, SELECTED_INFO } from './types'


export const login = user => ({
  type: AUTH_LOGIN,
  payload: user
})

export const selectedInfo = selects =>  ({
  type: SELECTED_INFO,
  payload: selects,
})