import styles from './AboutUs.module.css';
import Footer from '../../components/Footer/Footer/Footer.jsx';
import AboutUsCard from '../../components/AboutUsCard/AboutUsCard';
import { MainNav } from '../../components/MainNav/MainNav';
import UnorderedList from '../../components/UnorderedList/UnorderedList';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import MemberCard from '../../components/MemberCard/MemberCard.jsx';
import imagen_samuel from '../../assets/gallery/members/Samuel.png';
import imagen_julia from '../../assets/gallery/members/Julia.png';
import imagen_maravillas from '../../assets/gallery/members/Maravillas.jpeg';
import imagen_sindo from '../../assets/gallery/members/Sindo.jpeg';
const values = [
  {
    title: 'Solidaridad efectiva',
    description:
      'No solo palabras, sino compromiso real con quienes más lo necesitan.',
  },
  {
    title: 'Transparencia',
    description: 'En cada decisión, en cada gestión, en cada proyecto.',
  },
  {
    title: 'Inclusión',
    description: 'Todos tienen cabida en Auxilium.',
  },
  {
    title: 'Sostenibilidad',
    description: 'Construimos para el largo plazo, con recursos responsables.',
  },
];

const objectives = [
  'Promover proyectos de cooperación internacional',
  'Facilitar el acceso al agua potable en comunidades rurales',
  'Facilitar la digitalización de las comunidades mas desfavorecidas',
  'Impulsar proyectos de desarrollo comunitario',
  'Fomentar la solidaridad y el voluntariado',
];

export default function AboutUs() {
  return (
    <>
      <MainNav />
      <div className={styles.aboutUsContainer}>
        <h3 className={styles.aboutUsPersonSubtitle}>
          Las personas detras de Auxilium
        </h3>
        <MemberCard image={imagen_samuel} hasOnlyTitle={false}>
          <p>
            Nuestro presidente fundador, Samuel Batindi, cuenta con una amplia
            trayectoria profesional en el ámbito de los servicios humanitarios,
            especialmente en la defensa de los derechos humanos y la atención a
            personas en situación de vulnerabilidad, tanto en su país de origen
            como en España.
          </p>
          <p>
            Posee una sólida formación en Ciencias Políticas y Jurídicas por la
            Universidad de Douala (Camerún), lo que le proporciona los
            fundamentos teóricos y jurídicos necesarios para desarrollar su
            labor en el ámbito sociojurídico y humanitario.
          </p>
          <p>
            Desde su llegada a España, ha formado parte de múltiples
            organizaciones, como Cáritas, AMIAB y El Buen Camino.
          </p>
          <p>
            Desde la fundación de Auxilium en 2018, Samuel Batindi ejerce como
            presidente fundador, liderando la labor de nuestra entidad en la
            atención integral a personas en situación de vulnerabilidad.
          </p>
        </MemberCard>
        <MemberCard image={imagen_julia} hasOnlyTitle={false}>
          <p>
            Nuestra presidenta honorífica, Julia Martínez Vicentre, es una
            figura destacada del ámbito público y asociativo en la Comunitat
            Valenciana.
          </p>
          <p>
            Como exalcaldesa pedánea de Utiel, ejerció un liderazgo comprometido
            con el bienestar de la comunidad, consolidando su reputación como
            una gestora pública responsable.
          </p>
          <p>
            Su trayectoria en la administración autonómica se refleja en los
            diversos cargos que ha desempeñado, desde los que ha contribuido al
            desarrollo de políticas y proyectos de interés regional.
          </p>
          <p>
            Desde la fundación de Auxilium en 2018, desempeña el cargo de
            presidenta honorífica de la asociación. Su incorporación a este
            proyecto reconoce su experiencia, su trayectoria de servicio público
            y su compromiso con los valores de la entidad, aportando orientación
            y respaldo institucional al cumplimiento de su misión.
          </p>
        </MemberCard>
        <MemberCard image={imagen_maravillas} hasOnlyTitle={true}>
          <p>Maravillas del Carmen Monreal, tesorera de Auxilium.</p>
        </MemberCard>
        <MemberCard image={imagen_sindo} hasOnlyTitle={true}>
          <p>Gumersindo González, secretario de Auxilium</p>
        </MemberCard>
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
