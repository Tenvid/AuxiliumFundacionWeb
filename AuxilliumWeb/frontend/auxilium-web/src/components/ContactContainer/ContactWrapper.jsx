import styles from './ContactWrapper.module.css';
function ContactContainer({
  title,
  adress,
  contact_name,
  phone_number,
  email,
}) {
  return (
    <div className={styles.contactWrapper}>
      <h4>{title}</h4>
      <p>Dirección: {adress}</p>
      <p>
        {contact_name} Telefono: {phone_number}
      </p>
      <p>Correo eléctronico: {email}</p>
    </div>
  );
}
export default ContactContainer;
