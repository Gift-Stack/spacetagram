import UseAnimation from 'react-useanimations'
import heart from 'react-useanimations/lib/heart'

const Images = ({ images }) => {
  return (
    <div className="body">
      {images.map((image) => (
        <div key={image.title} className="flex image-item">
          <img src={image.url} alt="Img Src" />
          <div>
            <h3 className="title">
              {image.title} - {image.date}
            </h3>
            <p className="explanation">{image.explanation}</p>
            <div className="heart">
              <UseAnimation animation={heart} size={40} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Images
