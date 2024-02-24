import webWorldLogo from "../../images/web_world.svg";
import photo from "../../images/photo.svg";
import arrow from "../../images/arrow.svg";
import './Main.css';

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
  <>
    <section className="header about page__about ">
      <div className="about__container">
        <h1 className="about__title">Учебный проект студента факультета Веб&#x2011;разработки.</h1>
        <p className="about__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button smooth to='#aboutProject' className={`'about__button_active' about__link : ''}`} >Узнать больше</button>
        <img class="about__main-illustration about__decorate" src={webWorldLogo} alt="Картина"></img>
      </div>
      <div className="about__decorate"></div>
    </section>
    <section className="project page__project">
      <h2 className="project__title">О проекте</h2>
        <div className="project__container">
          <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
          <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className="project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="project__time-line">
          <p className="project__progress project__progress_backend" >1 неделя</p>
          <p className="project__progress">4 недели</p>
          <p className="project__text">Back-end</p>
          <p className="project__text">Front-end</p>
        </div>
    </section>
    <section className="technologies page__technologies">
      <h2 className="technologies__title">Технологии</h2>
      <h3 className="technologies__subtitle">7 технологий</h3>
      <p className="technologies__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="technologies__lists">
        <li className="technologies__list">HTML</li>
        <li className="technologies__list">CSS</li>
        <li className="technologies__list">JS</li>
        <li className="technologies__list">React</li>
        <li className="technologies__list">Git</li>
        <li className="technologies__list">Express.js</li>
        <li className="technologies__list">mongoDB</li>
      </ul>
    </section>
    <section className="student page__student">
      <h2 className="student__title">Студент</h2>
      <div className="student__container">
        <div className="student__text-container">
          <h3 className="student__name">Виталий</h3>
          <p className="student__job">Фронтенд-разработчик, 30 лет</p>
          <p className="student__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании "СКБ Контур". После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="student__link" href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <img src={photo} alt="фото студента" className="student__image" />
      </div>
    </section>
    
    <section className="portfolio page__portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav class="portfolio__menu">
        <ul className="portfolio__links">
          <li className="portfolio__layout">
            <a className="portfolio__link" href="https://burlake.github.io/how-to-learn-project/" target="_blank" rel="noopener noreferrer">Статичный сайт
              <button className="portfolio__arrow" type="button" src={arrow}></button>
            </a>
          </li>
          <li className="portfolio__layout">
            <a className="portfolio__link" href="https://burlake.github.io/russian-travel/" target="_blank" rel="noopener noreferrer">Адаптивный сайт
              <button className="portfolio__arrow" type="button" src={arrow}></button>
            </a>
          </li>
          <li className="portfolio__layout">
            <a className="portfolio__link" href="https://burlake.github.io/mesto-react/" target="_blank" rel="noopener noreferrer">Одностраничное приложение
              <button className="portfolio__arrow" type="button" src={arrow}></button>
            </a>
          </li>
        </ul>
      </nav>

        
      

  </section>


  </>
  

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