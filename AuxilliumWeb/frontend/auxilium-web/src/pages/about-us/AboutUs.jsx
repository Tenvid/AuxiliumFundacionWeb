import styles from './AboutUs.module.css';
import Footer from '../../components/Footer/Footer/Footer.jsx';
import AboutUsCard from '../../components/AboutUsCard/AboutUsCard';
import { MainNav } from '../../components/MainNav/MainNav';
import UnorderedList from '../../components/UnorderedList/UnorderedList';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import logo_dark from '../../assets/LogoAuxiliumVector--dark.svg';

const values = [
  {
    title: 'Transparencia',
    description: 'Gestionamos los recursos de forma responsable y clara.',
  },
  {
    title: 'Solidaridad',
    description:
      'Trabajamos con el compromiso de apoyar a quienes más lo necesitan.',
  },
  {
    title: 'Cooperación',
    description: 'Colaboramos con organizaciones locales y comunidades.',
  },
  {
    title: 'Respeto cultural',
    description: 'Respetamos las tradiciones y la identidad de cada comunidad.',
  },
];

const objectives = [
  'Promover proyectos de cooperación internacional',
  'Facilitar el acceso al agua potable en comunidades rurales',
  'Apoyar la educación y el desarrollo infantil',
  'Impulsar proyectos de desarrollo comunitario',
  'Fomentar la solidaridad y el voluntariado',
];

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

        <ul className={styles.aboutUsCardsContainer}>
          {values.map(({ title, description }) => (
            <AboutUsCard key={title} title={title}>
              {description}
            </AboutUsCard>
          ))}
        </ul>

        <h2 className={styles.aboutUsSubtitle}>Nuestros Objetivos</h2>
        <UnorderedList
          elementList={objectives}
          listClassName={styles.aboutUsUnorderedList}
          elementClassName={styles.aboutUsObjectiveCard}
        />
      </div>
      <Footer />
    </>
  );
}
