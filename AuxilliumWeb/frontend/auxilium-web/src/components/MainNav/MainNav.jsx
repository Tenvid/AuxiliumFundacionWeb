import logo_light from '../../assets/LogoAuxiliumVector.svg';
import { NavLink } from '../NavLink/NavLink';
import { LeftArrow } from '../LeftArrow/LeftArrow';
import styles from './MainNav.module.css';

export function MainNav() {
  const toggleNav = () => {
    const navContent = document.getElementById('homeNavContent');
    navContent.className =
      navContent.className == styles.homeNavContent
        ? styles.homeNavContentToggle
        : styles.homeNavContent;
    const navButton = document.getElementById('navButton');

    navButton.className = navButton.className.includes(
      styles.minusNinetyDegrees
    )
      ? styles.homeNavToggleNavButton
      : `${styles.homeNavToggleNavButton} ${styles.minusNinetyDegrees}`;
  };

  return (
    <nav className={styles.homeNav}>
      <div className={styles.homeNavLogoWrapper}>
        <img
          src={logo_light}
          alt="Ola"
          className={styles.homeNavLogoWrapperLogo}
        ></img>
      </div>
      <div className={styles.homeNavContent} id="homeNavContent">
        <ul className={styles.homeNavContentList}>
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/about-us">Quiénes somos</NavLink>
          <NavLink href="/projects">Proyectos</NavLink>
          <NavLink href="#">Impacto</NavLink>
          <NavLink href="/transparency">Transparencia</NavLink>
          <NavLink href="#">Noticias</NavLink>
          <NavLink href="/contact">Contacto</NavLink>
        </ul>
      </div>
      <button
        type="button"
        className={styles.homeNavToggleNavButton}
        onClick={toggleNav}
        id="navButton"
      >
        <LeftArrow />
      </button>
    </nav>
  );
}
