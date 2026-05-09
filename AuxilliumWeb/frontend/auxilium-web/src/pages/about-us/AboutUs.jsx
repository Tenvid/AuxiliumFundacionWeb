import styles from './AboutUs.module.css';
import AboutUsCard from '../../components/AboutUsCard/AboutUsCard';
import { MainNav } from '../../components/MainNav/MainNav';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
export default function AboutUs() {
  return (
    <>
      <MainNav />
      <div className={styles.aboutUsContainer}>
        <h1 className={styles.aboutUsTitle}>¿Quiénes somos?</h1>
        <img
          src={main_image}
          alt="Imagen de fondo"
          className={styles.aboutUsMainImage}
        />
        <p className={styles.aboutUsParagraph}>
          Nuestra misión es promover el desarrollo humano sostenible mediante
          proyectos de cooperación internacional que mejoren las condiciones de
          vida de comunidades en situación de vulnerabilidad, especialmente en
          el acceso al agua potable, la educación, la salud y el desarrollo
          comunitario.
        </p>
        <p className={styles.aboutUsParagraph}>
          Aspiramos a un mundo más justo en el que todas las personas tengan
          acceso a recursos básicos, oportunidades de desarrollo y una vida
          digna.
        </p>
        <h2 className={styles.aboutUsSubtitle}>Nuestros Valores</h2>

        <div className={styles.aboutUsCardsContainer}>
          <AboutUsCard title="Transparencia">
            Gestionamos los recursos de forma responsable y clara.
          </AboutUsCard>
          <AboutUsCard title="Solidaridad">
            Trabajamos con el compromiso de apoyar a quienes más lo necesitan
          </AboutUsCard>
          <AboutUsCard title="Cooperación">
            Colaboramos con organizaciones locales y comunidades
          </AboutUsCard>
          <AboutUsCard title="Respeto cultural">
            Respetamos las tradiciones y la identidad de cada comunidad
          </AboutUsCard>
        </div>

        <h2 className={styles.aboutUsSubtitle}>Nuestros Objetivos</h2>
        <ul className={styles.aboutUsUnorderedList}>
          <li className={styles.aboutUsObjectiveCard}>
            Promover proyectos de cooperación internacional
          </li>
          <li className={styles.aboutUsObjectiveCard}>
            Facilitar el acceso al agua potable en comunidades rurales
          </li>
          <li className={styles.aboutUsObjectiveCard}>
            Apoyar la educación y el desarrollo infantil
          </li>
          <li className={styles.aboutUsObjectiveCard}>
            Impulsar proyectos de desarrollo comunitario
          </li>
          <li className={styles.aboutUsObjectiveCard}>
            Fomentar la solidaridad y el voluntariado
          </li>
        </ul>
      </div>
    </>
  );
}
