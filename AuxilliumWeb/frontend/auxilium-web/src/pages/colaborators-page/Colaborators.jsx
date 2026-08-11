import styles from './Colaborators.module.css';
import ColaboratorCard from '../../components/ColaboratorsCard/ColaboratorCard';
import { MainNav } from '../../components/MainNav/MainNav';
import { HeaderImage } from '../../components/HeaderImage/HeaderImage';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import photo_hevea from '../../assets/gallery/colaborators/Hevea_Manufacturas.jpeg';
import photo_caritas from '../../assets/gallery/colaborators/Caritas_Cartagena.jpeg';
import Footer from '../../components/Footer/Footer/Footer.jsx';

export default function Colaborators() {
  return (
    <>
      <MainNav></MainNav>
      <HeaderImage image={main_image}>Colaboradores</HeaderImage>
      <div className={styles.cardsContainer}>
        <ColaboratorCard image={photo_caritas} title={'Caritas Cartagena'}>
          Colaboramos activamente con Caritas Cartagena, impulsando una alianza
          que favorece la colaboración con distintas entidades. Juntos
          trabajamos en beneficio de ambas asociaciones y de todas las personas
          que reciben su apoyo.
        </ColaboratorCard>
        <ColaboratorCard image={photo_hevea} title={'Hevea Manufacturas'}>
          En Agosto de 2023 firmamos nuestra colaboración con Hevea Manufacturas
          una empresa de manufacturación de muebles, esta colaboración ha sido
          beneficiosa para ambas partes, esperamos poder seguir colaborando en
          el futuro.
        </ColaboratorCard>
      </div>

      <div className={styles.platformBanner}>
        <a href="https://www.plataformadelvoluntariadoregiondemurcia.org/red-entidades/">
          <p>PERNENECEMOS A LA PLATAFORMA DE VOLUNTARIOS DE MURCIA</p>
        </a>
      </div>
      <Footer />
    </>
  );
}
