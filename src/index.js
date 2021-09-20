import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import ImageState from './context/ImageState'

ReactDOM.render(
  <React.StrictMode>
    <ImageState>
      <App />
    </ImageState>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
