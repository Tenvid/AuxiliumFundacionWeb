import "./TextImage.css"


export function TextImage({ children, image, imageAlt = null }) {
  return (
    <section className="text-image-wrapper">
      <p className="text-image__text">
        {children}
      </p>
      <img
        src={image}
        alt={imageAlt ? imageAlt : ""}
        className='text-image__image'
      />
    </section>
  )
}
