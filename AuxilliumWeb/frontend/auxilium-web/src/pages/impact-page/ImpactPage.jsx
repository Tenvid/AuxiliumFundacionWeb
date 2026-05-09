import Footer from '../../components/Footer/Footer/Footer';
import { MainNav } from '../../components/MainNav/MainNav';
import { TextImage } from '../../components/TextImage/TextImage';
import main_image from '../../assets/jessica-neves-sbMIZxxhgbw-unsplash.jpg';

export default function ImpactPage() {
  return (
    <>
      <MainNav />
      <TextImage image={main_image}>Impacto de la asociación</TextImage>
      <Footer />
    </>
  );
}
