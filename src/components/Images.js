import UseAnimation from 'react-useanimations'
import heart from 'react-useanimations/lib/heart'

const Images = ({ images }) => {
  console.log(images)
  return (
    <div className="body">
      {images.map((image) => (
        <div key={image.title} className="flex image-item">
          <img src={image.url} alt="Img Src" />
          <div>
            <h3>
              {image.title} - {image.date}
            </h3>
            <p style={{ marginBottom: 60 }}>{image.explanation}</p>
            <div style={{ cursor: 'pointer', display: 'inline-flex' }}>
              <UseAnimation animation={heart} size={40} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Images
