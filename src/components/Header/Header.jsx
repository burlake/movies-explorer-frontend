// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import "./header.css"
// import logo from "../../images/logo.svg";
// import logoAccount from "../../images/logo_account.svg";


// function Header({ name, loggedIn }) {
// const [isOpen, setIsOpen] = useState(false)

//   function handelClick() {
//     if (isOpen) {
//       setIsOpen(false)
//     } else {
//       setIsOpen(true)
//     }
//   }

//   function clickLink() {
//     setIsOpen(false)
//   }

//   useEffect(() => {
//     function closeBurgerForResize() {
//       if (document.documentElement.clientWidth > '767') {
//         setIsOpen(false)
//         window.removeEventListener('resize', closeBurgerForResize)
//       }
//     }
//     if (isOpen) {
//       window.addEventListener('resize', closeBurgerForResize)
//       return () => window.removeEventListener('resize', closeBurgerForResize)
//     }
//   }, [isOpen]) 

//     return (
//     <div className="page">
//       <header className={`header page__header`}>
//         <Link to={'/'}>
//           <img src={logo} alt="логотип " className="header__logo"/>
//         </Link>
        
//         {name === 'homepage' && !loggedIn ?
//           <div className='header__text-container'>
//             <Link to={'/signup'} className='header__text'>Регистрация</Link>
//             <Link to={'/signin'} className='header__unlogin'>Войти</Link>
//           </div>
//           :
//           <>
//           <div className='header__text-container'>
//             <Link to={'/movies'} className='header__text' onClick={clickLink}>Фильмы</Link>
//             <Link to={'/saved-movies'} className='header__text' onClick={clickLink}>Сохранённые фильмы</Link>
//             <Link to={'/profile'} className='header__text' onClick={clickLink}>Аккаунт</Link>
//             <div className='header__account'>
//               <img src={logoAccount} alt="аккаунт " className="header__logo_account"/>
//             </div>
//           </div>
//           <button type='button' className='header__button' onClick={handelClick}></button>
          
//           </>
//         }
//       </header>
//     </div>
//   )
// }

// export default Header;


import { useEffect, useState } from 'react';
import './header.css'
import { Link, useLocation } from "react-router-dom";


export default function Header({ name, loggedIn }) {
  const { pathname } = useLocation()
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
    <header className={`header page__header ${name !== 'homepage' ? 'page__header_type_page' : ''}`}>
      <div>
        <Link to={'/'} className="header__link-home"></Link>
      </div>
      {name === 'homepage' && !loggedIn ?
        <nav>
          <ul className='header__links-container'>
            <li>
              <Link to={'/signup'} className="header__signup">Регистрация</Link>
            </li>
            <li>
              <Link to={'/signin'} className="header__signin">Войти</Link>
            </li>
          </ul>
        </nav>
        :
        <>
          <nav className={`header__nav ${isOpen ? 'header__nav_open' : ''}`}>
            <ul className='header__links-container header__links-container_type_page'>
              <li className='header__link-container'>
                <Link
                  to={'/'}
                  className={`header__link ${pathname === '/' ? 'header__link_active' : ''}`}
                  onClick={clickLink}
                >Главная</Link>
              </li>
              <li className='header__link-container'>
                <Link
                  to={'/movies'}
                  className={`header__link ${pathname === '/movies' ? 'header__link_active' : ''}`}
                  onClick={clickLink}
                >Фильмы</Link>
              </li>
              <li className='header__link-container'>
                <Link
                  to={'/saved-movies'}
                  className={`header__link ${pathname === '/saved-movies' ? 'header__link_active' : ''}`}
                  onClick={clickLink}
                >Сохранённые фильмы</Link>
              </li>
              <li className='header__link-container'>
                <Link
                  to={'/profile'}
                  className={`header__link header__link_type_acc ${pathname === '/profile' ? 'header__link_active' : ''}`}
                  onClick={clickLink}
                >Аккаунт <div className='header__acc-icon'></div></Link>
              </li>
            </ul>
            <button type='button' className='header__burger-close' onClick={handelClick}></button>
          </nav>
          <button type='button' className='header__burger' onClick={handelClick}></button>
        </>
      }
    </header>
  )
}
