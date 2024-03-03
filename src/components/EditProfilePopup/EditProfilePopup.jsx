import { useContext, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import useFormValidation from "../../utils/useFormValidation.js";
import { Link } from "react-router-dom";

function EditProfilePopup({ open, onClose, onUpdateUser, setLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const {
    values,
    errors,
    isValid,
    isInputValid,
    handleChange,
    reset,
    setValue,
  } = useFormValidation();

  useEffect(() => {
    reset({
      username: "Виталий",
      email: "pochta@yandex.ru",
    });
  }, [reset]);

  function onEdit(evt) {
    onClose();
    evt.preventDefault();
  }

  function outLogin() {
    setLoggedIn(false);
  }

  return (
    <PopupWithForm
      name="popup_type_edit"
      title="Привет, Виталий!"
      formButton="Редактировать"
      open={open}
      onClose={resetForPopup}
      isValid={isValid}
      onSubmit={handleSubmit}
    >
      <div className="search__container">
        <p className="form__name">Имя</p>
        <input
          required=""
          className={`form__subtitle form__subtitle_text_name ${
            isInputValid.name === undefined || isInputValid.name
              ? ""
              : "form__subtitle__invalid"
          }`}
          type="text"
          name="name"
          placeholder="Имя"
          minLength={2}
          maxLength={40}
          onChange={handleChange}
          value={values.name ? values.name : ""}
        />
      </div>
      <span id="input-name-error" className="error-message">
        {errors.name}
      </span>
      <div className="search__container">
        <p className="form__name">E-mail</p>
        <input
          required=""
          className={`form__subtitle form__subtitle_text_job ${
            isInputValid.email === undefined || isInputValid.email
              ? ""
              : "form__subtitle__invalid"
          }`}
          type="email"
          name="email"
          placeholder="E-mail"
          minLength={2}
          maxLength={200}
          onChange={handleChange}
          value={values.email}
        />
      </div>
      <span id="input-occupation-error" className="error-message">
        {errors.about}
      </span>
      <Link to={"/"} className="exit_button" onClick={outLogin}>
        Выйти из аккаутна
      </Link>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
