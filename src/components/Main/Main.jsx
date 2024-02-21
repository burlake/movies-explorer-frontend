import webWorldLogo from "../../images/web_world.svg";
import './Main.css'

function Main({ name, dataUser }) {
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
  <section className="header about page__about ">
    <div className="about__container">
      <h1 className="about__title">Учебный проект студента факультета Веб-разработки.</h1>
      <p className="about__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <button smooth to='#aboutProject' className={`'about__button_active' about__link : ''}`} >Узнать больше</button>
      <img class="about__main-illustration about__decorate" src={webWorldLogo} alt="Картина"></img>
    </div>
    <div className="about__decorate"></div>
  </section>

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

export default Main;