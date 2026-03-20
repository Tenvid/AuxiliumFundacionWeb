import './App.css'
import logo_light from "./assets/LogoAuxiliumVector.svg"
import main_image from "./assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg"
function App() {

  return (
    <>
      <nav className='home-nav'>
        <div className='logo-wrapper'>
          <img src={logo_light} alt="Ola" className='home-nav-logo'></img>
        </div>
        <div className='home-nav__content'>
          <ul className='home-nav__content__list'>
            <a className="nav-link">
              <li className='nav-element'>Inicio</li>
            </a>
            <a>
              <li className='nav-element'>Quiénes somos</li>
            </a>
            <a className="nav-link">
              <li className='nav-element'>Proyectos</li>
            </a>
            <a className="nav-link">
              <li className='nav-element'>Impacto</li>
            </a>
            <a className="nav-link">
              <li className='nav-element'>Transparencia</li>
            </a>
            <a className="nav-link">
              <li className='nav-element'>Noticias</li>
            </a>
            <a className="nav-link">
              <li className='nav-element'>Contacto</li>
            </a>
          </ul>
        </div>
      </nav>
      <section>
        <img src={main_image} alt="Main image" className='main-image' />
      </section>
    </>
  )
}

export default App
