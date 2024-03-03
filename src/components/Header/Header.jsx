import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./header.css"
import logo from "../../images/logo.svg";
import logoAccount from "../../images/logo_account.svg";


function Header({ name, loggedIn }) {
const [isOpen, setIsOpen] = useState(false)

  function handelClick() {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  function clickLink() {
    setIsOpen(false)
  }

  useEffect(() => {
    function closeBurgerForResize() {
      if (document.documentElement.clientWidth > '767') {
        setIsOpen(false)
        window.removeEventListener('resize', closeBurgerForResize)
      }
    }
    if (isOpen) {
      window.addEventListener('resize', closeBurgerForResize)
      return () => window.removeEventListener('resize', closeBurgerForResize)
    }
  }, [isOpen]) 

    return (
    <div className="page">
      <header className={`header page__header`}>
        <Link to={'/'} className="brand">
          <img src={logo} alt="логотип " className="header__logo"/>
        </Link>
        
        {name === 'homepage' && !loggedIn ?
          <div className='header__text-container'>
            <Link to={'/signup'} className='header__text'>Регистрация</Link>
            <Link to={'/signin'} className='header__unlogin'>Войти</Link>
          </div>
          :
          <>
          <div className='header__text-container'>
            <Link to={'/movies'} className='header__text' onClick={clickLink}>Фильмы</Link>
            <Link to={'/saved-movies'} className='header__text' onClick={clickLink}>Сохранённые фильмы</Link>
            <Link to={'/profile'} className='header__text' onClick={clickLink}>Аккаунт</Link>
            <div className='header__account'>
              <img src={logoAccount} alt="аккаунт " className="header__logo_account"/>
            </div>
          </div>
          <button type='button' className='header__button' onClick={handelClick}></button>
          </>
        }
      </header>
    </div>
  )
}

export default Header;