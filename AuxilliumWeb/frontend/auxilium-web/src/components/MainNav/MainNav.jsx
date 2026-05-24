import logo_light from '../../assets/LogoAuxiliumVector.svg';
import { NavLink } from '../NavLink/NavLink';
import { LeftArrow } from '../LeftArrow/LeftArrow';
import styles from './MainNav.module.css';
import { useState } from 'react';

export function MainNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className={styles.homeNav}>
      <div className={styles.homeNavLogoWrapper}>
        <img
          src={logo_light}
          alt="Ola" //TODO: Cambiar el alt por algo más descriptivo
          className={styles.homeNavLogoWrapperLogo}
        ></img>
      </div>
      <div
        className={`${styles.homeNavContent}${isNavOpen ? ` ${styles.homeNavOpen}` : ''}`}
      >
        <ul className={styles.homeNavContentList}>
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/about-us">Quiénes somos</NavLink>
          <NavLink href="/projects">Proyectos</NavLink>
          <NavLink href="/impact">Impacto</NavLink>
          <NavLink href="/transparency">Transparencia</NavLink>
          <NavLink href="#">Noticias</NavLink>
          <NavLink href="/contact">Contacto</NavLink>
        </ul>
      </div>
      <button
        type="button"
        className={`${styles.homeNavToggleNavButton}${isNavOpen ? ` ${styles.minusNinetyDegrees}` : ''}`}
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <LeftArrow />
      </button>
    </nav>
  );
}
