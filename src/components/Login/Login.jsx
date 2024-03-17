import RegistrationForm from '../RegistrationForm/RegistrationForm'
import useFormValidation from '../../utils/useFormValidation'
import Input from "../Input/Input";
import "./login.css"
import { Navigate } from 'react-router-dom';


export default function Login({ name, setLoggedIn, title }) {
  const { values, errors, isValid, isInputValid, handleChange, } = useFormValidation()

  function onLogin(evt) {
    evt.preventDefault()
    setLoggedIn (true)
    Navigate ('/movies')

  }


  return (
    <RegistrationForm name ={name} onSubmit={onLogin} isValid={isValid}>
      <div className="login_container">
      <p className="form__name">E-mail</p>
        <Input
        title='E-mail'
        name='email'
        type='email'
        placeholder={'Email'}
        value={values.email}
        onChange={handleChange}
        isInputValid={isInputValid.email}
        error={errors.email}
        autocomplete="email"
      />
      </div>
      <div className="login_container">
      <p className="form__name">Пароль</p>
      <Input
        title='Пароль'
        name='password'
        type='password'
        placeholder={'Пароль'}
        minLength={3}
        value={values.password}
        onChange={handleChange}
        isInputValid={isInputValid.password}
        error={errors.password}
        autocomplete="current-password"
      />
      </div>

    </RegistrationForm>
  )
}
