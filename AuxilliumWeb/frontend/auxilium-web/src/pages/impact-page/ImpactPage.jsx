import Footer from '../../components/Footer/Footer/Footer';
import { MainNav } from '../../components/MainNav/MainNav';
import { TextImage } from '../../components/TextImage/TextImage';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import styles from './ImpactPage.module.css';

export default function ImpactPage() {
  return (
    <>
      <MainNav />
      <TextImage image={main_image}>Impacto de la asociación</TextImage>
      <h3>Nuestro impacto en 2026</h3>
      <h4>
        En 2026 mas de 2000 personas mejorarón su situación personal gracias a
        los proyectos de nuestra asociación
      </h4>

      <img src={main_image} alt="" className={styles.headerImage} />
      <div className={styles.paragraphsWrapper}>
        <span>+1000 Personas ayudadas</span>
        <span>+500 Nuevas oportunidades creadas</span>
        <span>+10000€ Destinados a proyectos de integración social</span>
      </div>

      <h3>Conoce a quienes se han beneficiado de nuestros proyectos</h3>
      <Footer />
    </>
  );
}
