import './App.css'
import logo_light from "./assets/LogoAuxiliumVector.svg"
import main_image from "./assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg"
import { NavLink } from './components/NavLink'
function App() {

  return (
    <>
      <nav className='home-nav'>
        <div className='home-nav__logo-wrapper'>
          <img src={logo_light} alt="Ola" className='home-nav__logo-wrapper__logo'></img>
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
      </nav>

      <section>
        <p className="main-image__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec fringilla leo. Etiam quis pulvinar eros. Aenean ullamcorper nunc vel vehicula laoreet. Quisque lobortis arcu lacus, ut placerat leo euismod non. Donec hendrerit venenatis enim. Aliquam lobortis odio sagittis maximus eleifend. Mauris gravida enim id odio feugiat euismod. Vestibulum magna erat, egestas a ipsum ac, sollicitudin semper ex. Curabitur metus neque, efficitur eget urna id, pellentesque vehicula purus. Praesent molestie, velit a blandit gravida, nibh enim molestie augue, eu tempor mauris velit a lectus. Ut vestibulum maximus congue. Proin venenatis bibendum metus quis mollis.</p>
        <img src={main_image} alt="Main image" className='main-image' />
      </section>

      <section className='image-grid-wrapper'>
        <div className='image-grid'>
          <img src={main_image} alt="Grid Image" className='image-grid__image' />
          <img src={main_image} alt="Grid Image" className='image-grid__image' />
          <img src={main_image} alt="Grid Image" className='image-grid__image' />
          <img src={main_image} alt="Grid Image" className='image-grid__image' />
          <img src={main_image} alt="Grid Image" className='image-grid__image' />
          <img src={main_image} alt="Grid Image" className='image-grid__image' />
        </div>
      </section>
    </>
  )
}

export default App
