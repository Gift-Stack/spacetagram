import { useEffect, useContext, useState } from 'react'
import './App.css'
import ImageContext from './context/imageContext'
import RocketInSpace from './assets/rocket-in-space.gif'
import Header from './components/Header'
import Images from './components/Images'
import Pagination from './components/Pagination'

function App() {
  const { getImages, images, loading } = useContext(ImageContext)
  const [postsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  // eslint-disable-next-line
  useEffect(() => getImages(), [])

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = images?.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (active) => setCurrentPage(active)

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
        {currentPosts?.map((image) => (
          <Images key={image.title} image={image} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={images?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default App
