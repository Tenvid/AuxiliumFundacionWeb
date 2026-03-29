import './App.css'
import main_image from "./assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg"
import { MainNav } from './components/MainNav'
import { TextImage } from './components/TextImage'
import logo_dark from "./assets/LogoAuxiliumVector--dark.svg"

function App() {

  const loadGridImages = () => {
    const gridImages = [];
    const images = [
      main_image,
      main_image,
      main_image,
      main_image,
      main_image,
      main_image,
    ]

    const gridImagesText = [
      'Lorem Ipsum dolor sit amet',
      'Lorem Ipsum dolor sit amet',
      'Lorem Ipsum dolor sit amet',
      'Lorem Ipsum dolor sit amet',
      'Lorem Ipsum dolor sit amet',
      'Lorem Ipsum dolor sit amet',
    ]

    for (let i = 0; i < 6; i++) {
      gridImages.push(
        <TextImage
          image={images[i]}
          key={i}>
          {gridImagesText[i]}
        </TextImage>
      );
    }

    return gridImages
  }
  const gridImages = loadGridImages()

  return (
    <>
      <MainNav></MainNav>

      <TextImage image={main_image}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec fringilla leo.
      </TextImage>

      <section className='image-grid-wrapper'>
        <div className='image-grid'>
          {gridImages}
        </div>
      </section>

      <section>
        <div className='footer-image__header-wrapper'>
          <h4 className='footer-image__header'>
            COLABORA
          </h4>

          <div className='footer-image__button-wrapper'>
            <a href="#" className='footer-image__button'>
              COLABORA CON NOSOTROS
            </a>
          </div>
        </div>

        <TextImage image={main_image}>
          Forma parte del cambio:
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac pretium  mi, eget vulputate ante. Integer sodales, mauris at laoreet posuere,  erat libero tempus diam, quis varius massa massa a.</TextImage>
      </section>

      <footer className='footer-wrapper'>
        <img src={logo_dark} alt="" />
      </footer>
    </>
  )
}

export default App
