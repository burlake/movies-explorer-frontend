function ImagePopup({ card, open, onClose }) {
  return (
    <div className={`popup popup_type_new-avatar popup-about ${open && "popup_opened"}`} onClick={onClose}>
      <div className="popup__content popup__content_full" onClick={(event => event.stopPropagation())}>
        <button className="popup__close-button popup__close-button_type_image" type="button" aria-label="Закрыть" onClick={onClose} />
        <figure>
          <img className="popup__image-full" src={card.link} alt={`${card.name}. Подпись к иллюстации.`}/>
          <figcaption className="popup__image-tittle">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
