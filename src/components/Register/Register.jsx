import RegistrationForm from "../RegistrationForm/RegistrationForm";
import useFormValidation from "../../utils/useFormValidation";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";


export default function Register({ setLoggedIn }) {
  const { values, errors, isValid, isInputValid, handleChange } = useFormValidation()
  const navigate = useNavigate()

  function onRegister(event) {
    event.preventDefault()
    navigate('/signin')
    setLoggedIn(true)
  }

  return (
    <RegistrationForm name='signup' onSubmit={onRegister} isValid={isValid}>
      <Input
        name='name'
        type='text'
        title='Имя'
        placeholder={'Имя'}
        value={values.name}
        onChange={handleChange}
        isInputValid={isInputValid.name}
        error={errors.name}
        minLength = '2'
        autocomplete="username"
      />
      <Input
        name='email'
        type='email'
        placeholder={'Email'}
        value={values.email}
        onChange={handleChange}
        isInputValid={isInputValid.email}
        error={errors.email}
        autocomplete="email"
      />
      <Input
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
    </RegistrationForm>
  )
}
