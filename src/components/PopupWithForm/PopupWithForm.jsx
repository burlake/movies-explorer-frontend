function PopupWithForm({ name, title, formButton, children, open, onClose, onSubmit, isValid=true }) {
  return (
    <div className={`popup popup_type_${name} popup-about ${open && "popup_opened"}`} onClick={onClose} >
      <div className="popup__content" onClick={(event => event.stopPropagation())}>
        <button
          className="popup__close-button popup__close-button_type_edit"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form className="form form_edit" action="#" name={name} onSubmit={onSubmit}>
          {children}
          <button className={`form__button ${isValid ? '' : 'form__button_disabled'}`} type="submit" >
            {formButton} 
          </button>
        </form> 
      </div>
    </div>
  );
}

export default PopupWithForm;
