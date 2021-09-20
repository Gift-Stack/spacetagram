import { useReducer } from 'react'
import ImageContext from './imageContext'
import ImageReducer from './imageReducer'
import { GET_IMAGES } from './types'

import axios from 'axios'

const ImageState = ({ children }) => {
  const initialState = {
    images: [],
    loading: true
  }

  const [state, dispatch] = useReducer(ImageReducer, initialState)

  // Get images
  const getImages = async () => {
    const res = await axios(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=30`
    )
    const resData = await res.data
    dispatch({ type: GET_IMAGES, payload: resData })
  }

  return (
    <ImageContext.Provider
      value={{ images: state.images, loading: state.loading, getImages }}
    >
      {children}
    </ImageContext.Provider>
  )
}

export default ImageState
