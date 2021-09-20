import { useEffect, useContext } from 'react'
import './App.css'
import ImageContext from './context/imageContext'
import RocketInSpace from './assets/rocket-in-space.gif'
import Images from './components/Images'

function App() {
  const { getImages, images, loading } = useContext(ImageContext)
  useEffect(() => getImages(), [images, getImages])

  if (loading)
    return (
      <div className="loader">
        <img src={RocketInSpace} alt="Rocket in space" />
      </div>
    )
  return (
    <div className="App">
      <Images images={images} />
    </div>
  )
}

export default App
