import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Card({ card, onCardLike, onImageCard, onTrashButton}) {

  const currentUser = useContext (CurrentUserContext)
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `card__like ${isLiked && 'card__like_active'}` 
  );

  return (
    <div className="card">
      <img className="card__img" src={card.link} alt={`${card.name}. Иллюстрация.`} onClick={() => onImageCard({ name: card.name, link: card.link })}/>
      <div className="card__container">
        <h2 className="card__place">{card.name}</h2>
        <button className={cardLikeButtonClassName} type="button" onClick={() => onCardLike(card)}/>
        <span className="card__number-of-likes">{card.likes.length}</span>
      </div>
      {isOwn && <button className="card__trash" type="button" aria-label="Корзина" onClick={() => onTrashButton(card._id)}/>}
    </div>
  );
}

export default Card;
