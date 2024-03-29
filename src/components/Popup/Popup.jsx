import './popup.css'

export default function Popup({ name, children, open, onClose }) {

  return (
    <div className={`popup popup_type_${name} ${open ? 'popup_opened' : ''}`} onClick={onClose}>
      <div
        className={`${name === 'image' ? 'popup__image-container' : 'popup__container'} ${name === 'successful' || name === 'error' ? 'popup__registration-container' : ''}`}
        onClick={(evt) => evt.stopPropagation()}>
        <button type="button" className="popup__close-icon" onClick={onClose} />
        {children}
      </div>
    </div>
  )
}