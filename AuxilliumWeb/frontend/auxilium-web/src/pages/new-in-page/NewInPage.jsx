import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MainNav } from '../../components/MainNav/MainNav';
import logo_dark from '../../assets/LogoAuxiliumVector--dark.svg';
import styles from './NewInPage.module.css';

export default function NewInPage() {
  const [newInPage, setNewInPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:8000/news?slug=${slug}`;

    const fetchNew = async () => {
      try {
        const response = await fetch(apiUrl);
        // Si la respuesta no es exitosa (ej. 404 Not Found), lanza un error
        if (!response.ok) {
          throw new Error('No se pudo encontrar la noticia.');
        }
        // Convierte la respuesta en un objeto JSON
        const data = await response.json();
        // Actualiza el estado con el objeto de la noticia
        setNewInPage(data);
      } catch (e) {
        // Captura cualquier error de la red o del parsing
        setError(e.message);
      } finally {
        // Se ejecuta siempre, tanto si hay éxito como si hay error
        setLoading(false);
      }
    };

    fetchNew();
  }, [slug]); // El efecto se vuelve a ejecutar si el slug cambia

  // Muestra un mensaje mientras se cargan los datos
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Muestra un mensaje si ocurrió un error
  if (error) {
    return <div className={styles.ErrorMessage}>Error: {error}</div>;
  }

  // Renderiza la página con los datos de la noticia
  return (
    <div className={styles.NewInPageContainer}>
      <MainNav />
      <section className={styles.NewsDetailWrapper}>
        {/* El renderizado condicional ahora solo depende de newInPage */}
        {newInPage ? (
          <article>
            <h1 className={styles.NewsTitle}>{newInPage.title}</h1>
            <p className={styles.NewsDate}>{newInPage.publish_date}</p>
            <p className={styles.NewsHeader}>{newInPage.header}</p>
            <img
              src={newInPage.image}
              alt={newInPage.title}
              className={styles.NewsImage}
            />
            <p className={styles.NewsContentWrapper}>
              {Array.isArray(newInPage.content) && newInPage.content.map((paragraph, index) => (
                <p key={index} className={styles.NewsContent}>
                  {paragraph}
                </p>
              ))}
            </p>
          </article>
        ) : (
          <h2 className={styles.ErrorMessage}>
            No existe una noticia para el slug recibido.
          </h2>
        )}
      </section>
      <footer className={styles.footerWrapper}>
        <img src={logo_dark} alt="" />
      </footer>
    </div>
  );
}