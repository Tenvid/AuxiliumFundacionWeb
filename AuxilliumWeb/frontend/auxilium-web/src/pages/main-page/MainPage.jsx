import './MainPage.css';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import title_image from '../../assets/gallery/projects/index/ManosUnidas.jpeg';
import about_us from '../../assets/gallery/projects/index/QuienesSomos.jpeg';
import projects from '../../assets/gallery/projects/index/Proyectos.jpeg';
import impact from '../../assets/gallery/projects/index/Impacto.jpeg';
import trasparency from '../../assets/gallery/projects/index/Transparencia.jpeg';
import contact from '../../assets/gallery/projects/index/Contacto.png';
import news from '../../assets/gallery/projects/index/Noticias.jpeg';
import { MainNav } from '../../components/MainNav/MainNav';
import { TextImage } from '../../components/TextImage/TextImage';
import { ImageWithHeaderAndButton } from '../../components/ImageWithHeaderAndButton/ImageWithHeaderAndButton.jsx';
import Footer from '../../components/Footer/Footer/Footer.jsx';
function MainPage() {
  const loadGridImages = () => {
    const gridImages = [];
    const images = [about_us, projects, impact, trasparency, contact, news];

    const gridImagesText = [
      'Quienes somos',
      'Proyectos',
      'Impacto',
      'Transparencia',
      'Contacto',
      'Noticias',
    ];
    const gridImagesLinks = [
      '/about-us',
      '/projects',
      '/impact',
      '/transparency',
      '/contact',
      '/news/page/1',
    ];

    for (let i = 0; i < 6; i++) {
      gridImages.push(
        <TextImage image={images[i]} href={gridImagesLinks[i]} key={i}>
          {gridImagesText[i]}
        </TextImage>
      );
    }

    return gridImages;
  };
  const gridImages = loadGridImages();

  return (
    <>
      <MainNav />

      <TextImage image={title_image} className="header">
        "Donde la solidaridad se convierte en acción"
      </TextImage>

      <section className="image-grid-wrapper">
        <div className="image-grid">{gridImages}</div>
      </section>

      <section>
        <ImageWithHeaderAndButton
          header="COLABORA"
          text="Forma parte del cambio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac pretium mi, eget vulputate ante. Integer sodales, mauris at laoreet posuere, erat libero tempus diam, quis varius massa massa a."
          buttonText="COLABORA CON NOSOTROS"
          buttonHref="/contact"
          image={main_image}
        />
      </section>

      <Footer />
    </>
  );
}

export default MainPage;
