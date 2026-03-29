import "./ImageWithHeaderAndButton.css"

export function ImageWithHeaderAndButton({ header, text, buttonText, buttonHref, image, imageAlt = null }) {
  return (
    <section className="image-with-header-and-button-wrapper">
      <img
        src={image}
        alt={imageAlt ? imageAlt : ""}
        className="image-with-header-and-button__image"
      />
      <div className="image-with-header-and-button__content">
        <h4 className="image-with-header-and-button__header">
          {header}
        </h4>
        <p className="image-with-header-and-button__text">
          {text}
        </p>
        <a href={buttonHref} className="image-with-header-and-button__button">
          {buttonText}
        </a>
      </div>
    </section>
  )
}
