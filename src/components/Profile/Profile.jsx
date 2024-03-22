import { Link } from "react-router-dom";
import "./profile.css"
import useFormValidation from "../../utils/useFormValidation";


function EditProfilePopup() {
  const { values, errors, isValid, isInputValid, handleChange } = useFormValidation()


  return (
    <>
      <section className="profile" isValid={isValid}>
        <form className="profile__form">
          <h3 className="profile__greeting">Привет, Виталий!</h3>
          <div className="profile__inputs">
            <p className="profile__text">Имя</p>
            <div className="profile__area profile__area_type_name">
              <input className="profile__settings" defaultValue="" placeholder={'Виталий'} minLength = '2' maxLength = '20' value={values.name} error={errors.name} isInputValid={isInputValid.name} onChange={handleChange} required />
            </div>
            <div className="profile__area profile__area_type_email">
              <input className="profile__settings" defaultValue=""placeholder={'pochta@pochta.ru'}  required />
            </div>
            <p className="profile__text">E-mail</p>
          </div>
          <Link to="/profile" className="profile__button">Редактировать</Link>
          <Link to={'/'} className="profile__link">Выйти из аккаунта</Link>
        </form>
      </section>
    </>
  )
}

export default EditProfilePopup;
