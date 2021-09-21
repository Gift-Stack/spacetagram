import { useState } from 'react'

import UseAnimation from 'react-useanimations'
import heart from 'react-useanimations/lib/heart'
import { useMediaQuery } from 'react-responsive'

const Images = ({ image }) => {
  const [showMore, setShowMore] = useState(false)
  const isGreaterThan700px = useMediaQuery({
    query: '(min-width: 700px)'
  })

  const { url, title, date, explanation } = image

  const explanationMini =
    image && isGreaterThan700px
      ? image?.explanation.slice(0, 500)
      : image?.explanation.slice(0, 180)

  return (
    <div className="flex image-item">
      <img src={url} alt="Img Src" />
      <div>
        <h3 className="title">
          {title} - {date}
        </h3>
        <p className="explanation">
          {showMore ? explanation : explanationMini + '...'}
          <a
            href="#!"
            style={{ color: '#999', textDecoration: 'none' }}
            onClick={() => setShowMore(!showMore)}
          >
            {' '}
            {showMore ? 'less' : 'more'}
          </a>
        </p>
        <div className="heart">
          <UseAnimation animation={heart} size={40} />
        </div>
      </div>
    </div>
  )
}

export default Images
