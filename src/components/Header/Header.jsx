import { useState } from 'react';
import './header.css'
import { Link } from "react-router-dom";


export default function Header({ name }) {
  const [ setIsOpen] = useState(false)

  function clickLink() {
    setIsOpen(false)
  }

  return (
    <header className={`header page__header`}>
      <div>
        <Link to={'/'} className="header__link-home"></Link>
      </div>
      <>
        <nav>
          <ul className='header__links-container header__links-container_type_page'>
            <li className='header__links-container_position'>
              <Link
                to={'/saved-movies'}
                className={`header__like`}
                onClick={clickLink}
              ></Link>
              <div className='header_active-amount'>
                <p className='header_active-amount_number'>2</p>
              </div>
            </li>
            <li className='header__links-container_position'>
              <Link
                to={'/saved-movies'}
                className={`header__basket`}
                onClick={clickLink}
              ></Link>
                <div className='header_active-amount'>
                  <p className='header_active-amount_number'>2</p>
              </div>
            </li>
          </ul>
        </nav>
      </>
    </header>
  )
}
