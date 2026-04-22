import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  /* Object that contains the form data */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  /* Form sent corrected and Error in form set */
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate all the forms inputs
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError('Por favor completa todos los campos');
      return;
    }

    try {
      // Placeholder to the backend, at the moment show the message on the console log
      console.log('Formulario enviado:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Delete the successful message on the form in 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError('Error al enviar el formulario. Intenta de nuevo.');
      console.error(err);
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Show the error message */}
        {error && <p className={styles.error}>{error}</p>}
        {/* Show the successful message */}
        {isSubmitted && (
          <p className={styles.success}>¡Mensaje enviado correctamente!</p>
        )}

        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder="Tu nombre"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="tu@email.com"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject" className={styles.label}>
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.input}
            placeholder="Asunto de tu mensaje"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Tu mensaje..."
            rows="4"
          />
        </div>

        <button type="submit" className={styles.button}>
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}
