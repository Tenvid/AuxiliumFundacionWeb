import './App.css'
import logo_light from "./assets/LogoAuxiliumVector.svg"
import main_image from "./assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg"
import { NavLink } from './components/NavLink'
function App() {

  return (
    <>
      <nav className='home-nav'>
        <div className='logo-wrapper'>
          <img src={logo_light} alt="Ola" className='home-nav-logo'></img>
        </div>
        <div className='home-nav__content'>
          <ul className='home-nav__content__list'>
            <NavLink href="#">
              Inicio
            </NavLink>
            <NavLink href="#">
              Quiénes somos
            </NavLink>
            <NavLink href="#">
              Proyectos
            </NavLink>
            <NavLink href="#">
              Impacto
            </NavLink>
            <NavLink href="#">
              Transparencia
            </NavLink>
            <NavLink href="#">
              Noticias
            </NavLink>
            <NavLink href="#">
              Contacto
            </NavLink>
          </ul>
        </div>
      </nav >
      <section>
        <img src={main_image} alt="Main image" className='main-image' />
      </section>
    </>
  )
}

export default App
