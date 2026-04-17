import './MainPage.css';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';
import { MainNav } from '../../components/MainNav/MainNav';
import { TextImage } from '../../components/TextImage/TextImage';
import { ImageWithHeaderAndButton } from '../../components/ImageWithHeaderAndButton/ImageWithHeaderAndButton.jsx';
import logo_dark from '../../assets/LogoAuxiliumVector--dark.svg';
import image_1 from '../../assets/gallery/projects/CampanaDonacionComida/CampanaDonacionComida_1.jpeg';
import image_2 from '../../assets/gallery/projects/CampanaDonacionRopa/CampanaDonacionRopa_1.jpeg';
import image_3 from '../../assets/gallery/projects/CampanaDonacionRopa/CampanaDonacionRopa_2.jpeg';
import image_4 from '../../assets/gallery/projects/PozoCamerun/PozoCamerun1.jpeg';
import image_5 from '../../assets/gallery/projects/PozoCamerun/PozoCamerun2.jpeg';
import image_6 from '../../assets/gallery/projects/index/ManosUnidas.jpeg';

function MainPage() {
  const loadGridImages = () => {
    const gridImages = [];
    const images = [image_1, image_2, image_3, image_4, image_5, image_6];

    const gridImagesText = [
      'Lorem Ipsum dolor sit amet',
      'Lorem Ipsum dolor sit amet',
      'Lorem Ipsum dolor sit amet',
      'Lorem Ipsum dolor sit amet',
      'Lorem Ipsum dolor sit amet',
      'Lorem Ipsum dolor sit amet',
    ];

    for (let i = 0; i < 6; i++) {
      gridImages.push(
        <TextImage image={images[i]} key={i}>
          {gridImagesText[i]}
        </TextImage>
      );
    }

    return gridImages;
  };
  const gridImages = loadGridImages();

  return (
    <>
      <MainNav></MainNav>

      <TextImage image={main_image}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        fringilla leo.
      </TextImage>

      <section className="image-grid-wrapper">
        <div className="image-grid">{gridImages}</div>
      </section>

      <section>
        <ImageWithHeaderAndButton
          header="COLABORA"
          text="Forma parte del cambio: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac pretium mi, eget vulputate ante. Integer sodales, mauris at laoreet posuere, erat libero tempus diam, quis varius massa massa a."
          buttonText="COLABORA CON NOSOTROS"
          buttonHref="#"
          image={main_image}
        />
      </section>

      <footer className="footer-wrapper">
        <img src={logo_dark} className="footer-logo" alt="" />
      </footer>
    </>
  );
}

export default MainPage;
