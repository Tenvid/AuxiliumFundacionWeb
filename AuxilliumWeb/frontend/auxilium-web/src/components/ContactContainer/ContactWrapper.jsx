//import styles
import styles from './ContactWrapper.module.css';

/**
 * ContactContainer
 *
 * Presentational component that shows contact information for a specific
 * branch/office (sede). It renders a title and contact details. Note: the
 * visible labels are currently in Spanish (e.g. "Dirección", "Teléfono").
 *
 * @param {Object} props
 * @param {string} props.title Branch or office name displayed as heading.
 * @param {string} props.address Postal address or location string.
 * @param {string} props.contact_name Contact person name (displayed before phone).
 * @param {string} props.phone_number Phone number string for the contact.
 * @param {string} props.email Contact email address.
 * @returns {JSX.Element} A styled contact card element.
 *
 * Example:
 * <ContactContainer
 *   title="Sede Central"
 *   address="Calle Falsa 123"
 *   contact_name="María Pérez"
 *   phone_number="+34 600 000 000"
 *   email="info@auxilium.org"
 * />
 */
function ContactContainer({
  title,
  address,
  contact_name,
  phone_number,
  email,
}) {
  return (
    <div className={styles.contactWrapper}>
      <h4>{title}</h4>
      <p>Dirección: {address}</p>
      <p>
        {contact_name} Teléfono: {phone_number}
      </p>
      <p>Correo electrónico: {email}</p>
    </div>
  );
}
export default ContactContainer;
