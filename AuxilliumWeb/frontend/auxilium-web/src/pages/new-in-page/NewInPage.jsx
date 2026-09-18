import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // NUEVO: Importación de Helmet
import { MainNav } from '../../components/MainNav/MainNav';
import ReactMarkdown from 'react-markdown';
import logo_dark from '../../assets/LogoAuxiliumVector--dark.svg';
import remarkGfm from 'remark-gfm';
import styles from './NewInPage.module.css';

export default function NewInPage() {
  const [newInPage, setNewInPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
    const apiUrl = `/api/news/?slug=${slug}`;

    const fetchNew = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('No se pudo encontrar la noticia.');
        const data = await response.json();
        setNewInPage(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNew();
  }, [slug]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div className={styles.ErrorMessage}>Error: {error}</div>;

  return (
    <div className={styles.NewInPageContainer}>
      {/* --- ETIQUETAS OPEN GRAPH Y TWITTER CARDS --- */}
      {newInPage && (
        <Helmet>
          <title>{newInPage.title} | Auxilium</title>

          {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
          <meta property="og:type" content="article" />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:title" content={newInPage.title} />
          {/* Usamos el header como descripción corta para la vista previa */}
          <meta property="og:description" content={newInPage.header} />
          <meta
            property="og:image"
            content={'https://auxiliumasociacion.online' + newInPage.image}
          />

          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={newInPage.title} />
          <meta name="twitter:description" content={newInPage.header} />
          <meta
            name="twitter:image"
            content={'https://auxiliumasociacion.online' + newInPage.image}
          />
        </Helmet>
      )}

      <MainNav />
      <section className={styles.NewsDetailWrapper}>
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
            <div className={styles.NewsContent}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {newInPage.content}
              </ReactMarkdown>
            </div>
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
