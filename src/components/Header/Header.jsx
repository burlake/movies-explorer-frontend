import logo from "../../images/logo.svg";
import logoAccount from "../../images/logo_account.svg";
// import { Link } from 'react-router-dom';
import './Heder.css'


function Header({ name, dataUser }) {
  //const [count, setCount] = useState(0)

//   const closeBurgerForResize = useCallback(() => {
//     if (document.documentElement.clientWidth > '767') {
//       setCount(0)
//       window.removeEventListener('resize', closeBurgerForResize)
//     }
//   }, [])

//   function handelClick() {
//     if (count === 0) {
//       setCount(1)
//       window.addEventListener('resize', closeBurgerForResize)
//     } else {
//       setCount(0)
//       window.removeEventListener('resize', closeBurgerForResize)
//     }
//   }

//   function onSignOut() {
//     setCount(0);
//     localStorage.removeItem('jwt')
//   }

  return (
    <div className="page">
        <header className={`header page__header`}>
          <a href="#" class="brand"><img src={logo} alt="логотип " className="header__logo"/></a>
            <div>
              <div className='header__text-container'>
                <p className='header__text'>Фильмы</p>
                <p className='header__text'>Сохранённые фильмы</p>
                <p className='header__text'>Аккаунт</p>
                <div className='header__account'>
                  <img src={logoAccount} alt="аккаунт " className="header__logo_account"/>
                </div>
              </div>
              {/* <div className='header__text-container'>
                <p className='header__text'>Регистрация</p>
                <Link to={`/sign-in`} className='header__unlogin'>Войти</Link>
              </div> */}
            </div>
        </header>
    </div>

// function Header() {
//   return (
//     <header className="header">
//       <img className="logo" src={logo} alt="Логотип сайта Место." />
//     </header>
//   );
// }

// export default Header;


  )
}

export default Header;