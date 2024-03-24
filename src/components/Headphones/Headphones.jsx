import { useState } from "react";
import { Link } from "react-router-dom";
import "./headphones.css";
import star from "../../images/star.svg"

function Headphones({ card, headphones, buttonType }) {
  const [btnType, setBtnType] = useState(buttonType);
  const headphone = (headphones || []).slice(0);

  const changeBtnType = () => {
    if (btnType === "searchSaved") return setBtnType("");
    if (!btnType) return setBtnType("searchSaved");
  };

  return (
    <>
      <section>
        <h1 className="gallery_title">Наушники</h1>
        <section className="gallery">
          {headphone.map((data) => {
            return (
              <div
                className="card"
                key={data.id}
                name={data.name}
                src={data.image}
                price={data.price}
                stars={data.stars}
              >
                <Link target="_blank">
                  <img
                    className="card__img"
                    src={data.image}
                    alt={`Иллюстрация фильма с названием " ${data.name}"`}
                  />
                </Link>
                <div className="card__container">
                  <h2 className="card__place">{data.name}</h2>
                  <p className="card__place">{data.price}</p>
                </div>
                <div className="card__container">
                  <div>
                  <img src={star}></img>
                  <p className="card__place">{data.stars}</p>
                </div>
                <p className="card__place">Купить</p>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </>
      );
}

      export default Headphones;
