import { useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx";
import useFormValidation from "../../utils/useFormValidation.js";
import { Link } from "react-router-dom";
import Input from "../Input/Input.jsx";
import "./profile.css"
import Header from "../Header/Header.jsx";

function EditProfilePopup({ open, onClose, onUpdateUser, setLoggedIn, }) {
  // const { values, errors, isInputValid, isValid, handleChange, reset } = useFormValidation()
  // const { values, errors, isInputValid, isValid, } = useFormValidation()
  // useEffect(() => {
  //   reset({
  //     username: "Виталий",
  //     email: "pochta@yandex.ru",
  //   });
  // }, [reset]);

  // function onEdit(evt) {
  //   onClose();
  //   evt.preventDefault();
  // }

  // function outLogin() {
  //   setLoggedIn(false);
  // }

  return (
  //   <section>
  //     <PopupWithForm
  //     name="popup_type_edit"
  //     title={`Привет, Виталий!`}
  //     formButton="Редактировать"
  //     // open={open}
  //     // isValid={isValid}
  //     // onSubmit={ onEdit }
  //   >
  //     <div className="search__container">
  //       <p className="form__name">Имя</p>
  //       <input
  //         required=""
  //         className={`form__subtitle form__subtitle_text_name ${
  //           isInputValid.name === undefined || isInputValid.name
  //             ? ""
  //             : "form__subtitle__invalid"
  //         }`}
  //         type="text"
  //         title="Имя"
  //         name="name"
  //         placeholder="Имя"
  //         minLength={2}
  //         maxLength={40}
  //         // onChange={handleChange}
  //         value={values.name ? values.name : ""}
  //       />
  //     </div>
  //     <span id="input-name-error" className="error-message">
  //       {errors.name}
  //     </span>
  //     <div className="search__container">
  //       <p className="form__name">E-mail</p>
  //       <input
  //         required=""
  //         className={`form__subtitle form__subtitle_text_job ${
  //           isInputValid.email === undefined || isInputValid.email
  //             ? ""
  //             : "form__subtitle__invalid"
  //         }`}
  //         type="email"
  //         name="email"
  //         placeholder="E-mail"
  //         minLength={2}
  //         maxLength={200}
  //         // onChange={handleChange}
  //         value={values.email}
  //       />
  //     </div>
  //     <span id="input-occupation-error" className="error-message">
  //       {errors.about}
  //     </span>
  //   </PopupWithForm>
  //   <Link to={"/"} className="exit_button" >
  //     Выйти из аккаутна
  //   </Link>
  // </section>
  <>
    {/* <Header/> */}
      <section className="profile">
          <form className="profile__form">
            <h3 className="profile__greeting">Привет, Виталий!</h3>
            <div className="profile__inputs">
              <p className="profile__text">Имя</p>
              <div className="profile__area profile__area_type_name">
                <input className="profile__settings" defaultValue="Виталий" required />
              </div>
              <div className="profile__area profile__area_type_email">
                <input className="profile__settings" defaultValue="pochta@pochta.ru" required />
              </div>
              <p className="profile__text">E-mail</p>
            </div>
            <Link to="/profile" className="profile__button">Редактировать</Link>
            <Link to="/" className="profile__link">Выйти из аккаунта</Link>
          </form>
        </section>
  </>

  )
}

export default EditProfilePopup;
