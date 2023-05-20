import React from 'react';


function PopupWithForm(props) {
  const popupOpened = props.isOpen ? (`popup popup_${props.name} popup_opened`) : (`popup popup_${props.name}`)

  return (
    <section className={popupOpened}>
      <div className="popup__container">
        <form className={`form form_${props.name}`} name={`popup_form_${props.name}`} noValidate>
          <h2 className="form__title">{`${props.title}`}</h2>
          {props.children}
          <button className="form__button form__button_disabled" type="submit" name="button" value={`${props.buttonText}`}
            aria-label={`${props.btnAriaLabel}`} disabled={true}>{`${props.buttonText}`}</button>
        </form>
        <button className="popup__close" type="button" aria-label={`${props.btnAriaLabel}`} onClick={props.onClose}></button>
      </div>
    </section>
  );
}


export default PopupWithForm;
