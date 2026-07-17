// Import logo assest
import logo_light from '../../assets/LogoAuxiliumVector.svg';

// Import nav link component.
import { NavLink } from '../NavLink/NavLink';

// Import Left Arrow component.
import { LeftArrow } from '../LeftArrow/LeftArrow';

// Import styles.
import styles from './MainNav.module.css';

//Import react states
import { useState } from 'react';

/**
 * MainNav
 *
 * Primary site navigation component. Renders the organization logo, a list
 * of top-level navigation links (using the `NavLink` component) and a mobile
 * toggle button that displays a left-arrow icon. Navigation labels are in
 * Spanish to match the site's language.
 *
 * This component is stateful: it manages `isNavOpen` to control the mobile
 * menu open/closed state.
 *
 * @returns {JSX.Element}
 */
export function MainNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className={styles.homeNav}>
      <div className={styles.homeNavLogoWrapper}>
        <img
          src={logo_light}
            alt="Auxilium logo"
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
          <NavLink href="/news/page/1">Noticias</NavLink>
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
