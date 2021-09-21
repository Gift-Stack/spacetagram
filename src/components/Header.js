import Nasa from '../assets/nasa.png'

const Header = () => {
  return (
    <header className="head">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20
        }}
      >
        <img src={Nasa} alt="Nasa" width={70} />
        <span className="header-text">Spacetagram</span>
      </div>
      <p style={{ fontSize: 'smaller', width: '100%' }}>
        Brought to you by NASA's image API
      </p>
    </header>
  )
}

export default Header
