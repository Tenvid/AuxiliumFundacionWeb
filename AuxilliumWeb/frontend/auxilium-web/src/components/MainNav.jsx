import logo_light from "../assets/LogoAuxiliumVector.svg"
import { NavLink } from './NavLink'
import { LeftArrow } from "./LeftArrow"
import './MainNav.css'

export function MainNav() {


  const toggleNav = () => {
    const navContent = document.getElementById('homeNavContent');
    navContent.className = navContent.className == 'home-nav__content' ? 'home-nav__content--toggle' : 'home-nav__content';
    const navButton = document.getElementById("navButton");

    navButton.className = navButton.className.includes("minus-ninety-degrees") ?
      "home-nav__toggle-nav-button" : "home-nav__toggle-nav-button minus-ninety-degrees"
  }

  return (
    <nav className='home-nav'>
      <div className='home-nav__logo-wrapper'>
        <img src={logo_light} alt="Ola" className='home-nav__logo-wrapper__logo'></img>
      </div>
      <div className='home-nav__content' id="homeNavContent">
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
      <button
        type="button"
        className="home-nav__toggle-nav-button"
        onClick={toggleNav}
        id="navButton"
      >
        <LeftArrow />
      </button>
    </nav>
  )
}
