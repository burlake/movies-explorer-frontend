import Form from '../Form/Form';
import './RegistrationForm.css'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";



export default function RegistrationForm({ name, children, isValid, onSubmit, title }) {

  return (
    <section className="login page__login">
      <Link to={'/'}>
        <img src={logo} alt="логотип " className="header__logo_form"/>
      </Link>
      <h2 className="login__title">{name === 'signup' ? 'Добро пожаловать!' : 'Рады видеть!'}</h2>
      <p className="form__name">{title}</p>
      <Form
        name={name}
        titleButton={name === 'signup' ? 'Зарегистрироваться' : 'Войти'}
        children={children}
        isValid={isValid}
        onSubmit={onSubmit}
      />
          
      {name === 'signup' ?
          <p className='login__subtitle'>Уже зарегистрированы? <Link to={'/signin'} className='login__subtitle-link'>Войти</Link></p>
          : name === 'signin' ?
          <p className='login__subtitle'>Ещё не зарегистрированы? <Link to={'/signup'} className='login__subtitle-link'>Регистрация</Link></p>
          : 
          <Link to={'/'}>Выйти из аккаунта</Link>
      }
    </section>
  )
}
