import "./Search.css";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import "../App"


function Search({ data, buttonType, savedMovies, addMovie }) {
  const [btnType, setBtnType] = useState(buttonType);
  const changeBtnType = () => {
    if (btnType === "searchSaved") return setBtnType("");
    if (!btnType) return setBtnType("searchSaved");
  };

  const [click, setClick] = useState(false)

  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/movies')
      setClick(savedMovies.some(element => data.id === element.movieId))
  }, [savedMovies, data.id, setClick, pathname])

  function onClick() {
    if (savedMovies.some(element => data.id === element.movieId)) {
      setClick(true)
      addMovie(data)
    } else {
      setClick(false)
      addMovie(data)
    }
  }

  function convertTime(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
  }


  return (
    <div className="page">
      <section className="search page__search">
        <div className="box search__container">
          <div class="container-4 search__form">
            <input
              className="search__input"
              type="search"
              id="search"
              placeholder="Фильм"
            />
            <button className="search__submit" type="submit">Поиск</button>
          </div>
        </div>
        <div>
          <div className="search__input-container">
            {" "}
            {/*toggle switch */}
            <input type="checkbox" id="switch" />
            <label for="switch">Toggle</label>
          </div>
          <span className="search__check-text">Короткометражки</span>
        </div>
      </section>

      <section>
        <div className="gallery">
          <div className="card">
            <div className="card__container">
              <h2 className="card__place">{data.nameRU}</h2>
              <p className="card__place">{convertTime(data.duration)}</p>
            </div>
            <img
            src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image} 
            alt={data.name} 
            className='card__img'
            />
            <button
              className="card__like"
              type="button"
              onClick={() => {
                changeBtnType();
              }}
            >
              {!btnType && "Сохранить"}
              {btnType === "saved" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="29"
                  fill="none"
                >
                  <rect width="100" height="29" fill="#313131" rx="14.5" />
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="m51.06 14.382 2.24-2.24-1.06-1.06-2.24 2.24-2.239-2.24-1.06 1.061 2.239 2.24-2.357 2.356 1.06 1.06L50 15.444l2.357 2.357 1.06-1.06-2.356-2.358Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {btnType === "searchSaved" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="29"
                  fill="none"
                >
                  <rect width="100" height="29" fill="#EE3465" rx="14.5" />
                  <path
                    stroke="#fff"
                    strokeWidth="1.5"
                    d="M46 14.75 48.819 17 54 12.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
