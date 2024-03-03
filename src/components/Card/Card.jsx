import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function Card({
  card,
  movies,
  buttonType,
}) {
  const [btnType, setBtnType] = useState(buttonType);
  const [count, setCount] = useState(printCards().init);
  const movie = movies.slice(0, count);

  const changeBtnType = () => {
    if (btnType === "searchSaved") return setBtnType("");
    if (!btnType) return setBtnType("searchSaved");
  };

  function printCards() {
    const counter = { init: 12, step: 3 };
    if (window.innerWidth < 1140) {
      counter.init = 8;
      counter.step = 2;
    }
    if (window.innerWidth < 750) {
      counter.init = 4;
      counter.step = 1;
    }
    return counter;
  }

  function clickMore() {
    setCount(count + printCards().step);
  }

  return (
    <section className="gallery">
      {movie.map((data) => {
        return (
          <div
            className="card"
            key={data.id}
            name={data.name}
            src={data.image}
            duration={data.duration}
          >
            <div className="card__container">
              <h2 className="card__place">{data.name}</h2>
              <p className="card__place">{data.duration}</p>
            </div>
            <Link target="_blank">
              <img className="card__img" src={data.image} alt="Иллюстрация." />
            </Link>
            <button
              className="card__like"
              type="button"
              onClick={() => {
                changeBtnType(card);
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
        );
      })}
      <button
        type="button"
        className={`gallery__more ${
          btnType >= movies.length && "gallery__more_hidden"
        }`}
        onClick={clickMore}
      >
        Ёще
      </button>
    </section>
  );
}

export default Card;
