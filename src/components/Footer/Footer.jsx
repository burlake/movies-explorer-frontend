import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className="footer page__footer ">
      <div className="footer__container">
      <Link to={'/'} className="header__link-home"></Link>
        <nav className="footer__links">
          <div className="footer__links_1">
            <Link
              to={'/saved-movies'}
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              Избранное
            </Link>
            <Link
              to={'/saved-movies'}
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              Корзина
            </Link>
            <a
              className="footer__link"
              href="tel:12345678"
              target="_blank"
              rel="noopener noreferrer"
            >
              Контакты
            </a>
          </div>

          <div className="footer__links_1">
            <a
              className="footer__link"
              href="https://rskrf.ru/consumer_rights/solutions/electronics_appliances/kak-vernut-naushniki-v-magazin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Условая сервиса
            </a>
            <div className="footer__links_2">
              <a
                className="footer__earth"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <a
                className="footer__link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Рус
              </a>
              <a
                className="footer__link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eng
              </a>
            </div>
          </div>

          <div className="footer__links_2">
            <a
              className="footer__vk"
              href="https://vk.com/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="footer__telegram"
              href="https://web.telegram.org/k/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="footer__whatsapp"
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>

























        </nav>
      </div>
    </footer>
  );
}

export default Footer;
