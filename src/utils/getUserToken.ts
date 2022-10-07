import {TOKEN_LOCAL_STORAGE} from '../constants'

function getUserToken() {
  return localStorage.getItem(TOKEN_LOCAL_STORAGE)
}

export {getUserToken}
