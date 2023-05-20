import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element" key={props.card._id}>
      <button className="element__trash hidden" type="button" aria-label="Удалить"></button>
      <div className="element__image"
        onClick={handleClick}
        style={{ backgroundImage: `url(${props.card.link})`, }}>
      </div>

      <div className="element__group">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-group">
          <button className="element__like" type="button" aria-label="нравится/не нравится"></button>
          <p className="element__like-number">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;