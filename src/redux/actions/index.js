import { AUTH_LOGIN, SAVE_PLATE, SELECTED_INFO } from './types'


export const login = user => ({
  type: AUTH_LOGIN,
  payload: user
})

export const selectedInfo = selects =>  ({
  type: SELECTED_INFO,
  payload: selects,
})

export const savePlate = plates => ({
  type: SAVE_PLATE,
  payload: plates,
})