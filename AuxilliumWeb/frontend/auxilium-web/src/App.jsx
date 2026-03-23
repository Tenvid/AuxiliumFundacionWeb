import './App.css'
import main_image from "./assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg"
import { MainNav } from './components/MainNav'
import { TextImage } from './components/TextImage'
function App() {

  // TODO:
  // - Nav should hide in order to be responsive.
  // - Grid gap should be in relative units
  // - Missing fonts
  // - Styling for links
  // - Grid should have one column in mobile phone
  // - Main image font size should change with screen size


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
    </>
  )
}

export default App
