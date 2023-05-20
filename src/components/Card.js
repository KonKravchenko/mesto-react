import React from 'react';

function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element" key={card._id}>
      <button className="element__trash hidden" type="button" aria-label="Удалить"></button>
      <div className="element__image"
        onClick={handleClick}
        style={{ backgroundImage: `url(${card.link})`, }}>
      </div>

      <div className="element__group">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-group">
          <button className="element__like" type="button" aria-label="нравится/не нравится"></button>
          <p className="element__like-number">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;