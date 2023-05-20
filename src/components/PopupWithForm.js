import React from 'react';


function PopupWithForm({ isOpen, name, title, buttonText, btnAriaLabel, children, onClose }) {
  const popupOpened = isOpen ? (`popup popup_${name} popup_opened`) : (`popup popup_${name}`)

  return (
    <section className={popupOpened}>
      <div className="popup__container">
        <form className={`form form_${name}`} name={`popup_form_${name}`} noValidate>
          <h2 className="form__title">{`${title}`}</h2>
          {children}
          <button className="form__button form__button_disabled" type="submit" name="button" value={`${buttonText}`}
            aria-label={`${btnAriaLabel}`} disabled={true}>{`${buttonText}`}</button>
        </form>
        <button className="popup__close" type="button" aria-label={`${btnAriaLabel}`} onClick={onClose}></button>
      </div>
    </section>
  );
}


export default PopupWithForm;
