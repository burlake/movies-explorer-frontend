import { useState } from "react";
import { Link } from "react-router-dom";
import trashBin from "../../images/delete.svg";

function Basket({ card, headphones, buttonType }) {
  const [btnType, setBtnType] = useState(buttonType);
  const savedHeadphone = (headphones || []).slice(0);

  const changeBtnType = () => {
    if (btnType === "searchSaved") return setBtnType("");
    if (!btnType) return setBtnType("searchSaved");
  };

  return (
    <>
      <section>
        <h1 className="gallery_title">Корзина</h1>
        <section className="gallery">
          {savedHeadphone.map((data) => {
            return (
              <section>
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
                <img src={trashBin}></img>
                <a className="card__place" href="https://codelab.pro/sozdaem-korzinu-tovarov-na-javascript/" target="_blank">Купить</a>
                </div>
              </div>

              <div>
                <div>
                  <p>ИТОГО</p>
                  <p>₽ 2 927</p>
                </div>
                <p>Перейти к оформлению</p>
              </div>
              </section>





            );
          })}
        </section>
      </section>
    </>
      );
}

      export default Basket;
