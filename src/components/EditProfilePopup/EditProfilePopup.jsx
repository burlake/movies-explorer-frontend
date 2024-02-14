import { useContext, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import useFormValidation from "../../utils/useFormValidation.js";

function EditProfilePopup({open, onClose, onUpdateUser}) {
    const currentUser = useContext(CurrentUserContext)
    const {values, errors, isValid, isInputValid, handleChange, reset, setValue } = useFormValidation()

    useEffect(() => {
        setValue("name", currentUser.name)
        setValue("about", currentUser.about)
    },[currentUser, setValue])

    function resetForPopup() {
        onClose()
        reset({ name:  currentUser.name, about: currentUser.about })
    }

    function handleSubmit (event) {
        event.preventDefault()
        onUpdateUser({name: values.name, about: values.about}, reset)
    }

  return (
    <PopupWithForm 
      name="popup_type_edit"
      title="Редактировать профиль"
      formButton="Сохранить"
      open={open}
      onClose={resetForPopup}
      isValid={isValid} //нет синхронности в обработке инпутов, как следствие отправить форму можно с некорректными данными - откладываю
      onSubmit={handleSubmit}
    >
      <input
        required=""
        className={`form__subtitle form__subtitle_text_name ${isInputValid.name === undefined || isInputValid.name ? '' : 'form__subtitle__invalid'}`}
        type="text"
        name="name"
        placeholder="Имя"
        minLength={2}
        maxLength={40}
        onChange={handleChange}
        value={values.name ? values.name : ''}
      />
      <span id="input-name-error" className="error-message">{errors.name}</span>
      <input
        required=""
        className={`form__subtitle form__subtitle_text_job ${isInputValid.about === undefined || isInputValid.about ? '' : 'form__subtitle__invalid'}`}
        type="text"
        name="about"
        placeholder="Занятие"
        minLength={2}
        maxLength={200}
        onChange={handleChange}
        value={values.about ? values.about : ''}
      />
      <span id="input-occupation-error" className="error-message">{errors.about}</span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
