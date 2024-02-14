import { useRef } from "react";
import useFormValidation from "../../utils/useFormValidation";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function EditAvatarPopup({open, onClose, onUpdateAvatar }) {
    const input = useRef()
    const {values, errors, isValid, isInputValid, handleChange, reset } = useFormValidation()

    function resetForPopup() {
        onClose()
        reset ()
    }

    function handleSubmit (event) {
        event.preventDefault()
        onUpdateAvatar({avatar: input.current.value}, reset)
    }

  return (
    <PopupWithForm //avatar
      name="popup_type_new-avatar"
      title="Обновить аватар"
      formButton="Создать"
      open={open}
      onClose={resetForPopup}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <input
        ref={input}
        required=""
        className={`form__subtitle ${isInputValid.avatar === undefined || isInputValid.avatar ? '' : 'form__subtitle__invalid'}`}
        type="url"
        name="avatar"
        placeholder="Ссылка на картинку"
        value={values.avatar ? values.avatar : ''}
        onChange={handleChange}
      />
      <span id="input-avatar-error" className="error-message">
      {errors.avatar}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
