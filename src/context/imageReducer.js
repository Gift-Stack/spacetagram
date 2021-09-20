import { GET_IMAGES } from './types'

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload,
        loading: false
      }
    default:
      return state
  }
}
