import React from 'react';

function ImagePopup(props) {
  const popupOpened = props.isOpen ? (`popup popup_${props.name} popup_opened`) : (`popup popup_${props.name}`)

  return (

    <section className={popupOpened}>
      <div className="popup__big-image-container">
        <img className="popup__big-image-image" src={props.cardData.link} alt={props.cardData.name} />
        <h2 className="popup__big-image-title">{props.cardData.name}</h2>
        <button className="popup__close"
          type="button"
          aria-label="закрыть большую картинку"
          onClick={props.onClose}>
        </button>
      </div>
    </section>
  );
}

export default ImagePopup;