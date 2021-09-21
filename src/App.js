import { useEffect, useContext } from 'react'
import './App.css'
import ImageContext from './context/imageContext'
import RocketInSpace from './assets/rocket-in-space.gif'
import Header from './components/Header'
import Images from './components/Images'

function App() {
  const { getImages, images, loading } = useContext(ImageContext)

  // eslint-disable-next-line
  useEffect(() => getImages(), [])

  if (loading)
    return (
      <div className="loader">
        <img src={RocketInSpace} alt="Rocket in space" />
      </div>
    )

  return (
    <div className="App">
      <Header />
      <div className="body">
        {images.map((image) => (
          <Images key={image.title} image={image} />
        ))}
      </div>
    </div>
  )
}

export default App
