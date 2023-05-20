import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }


  function handleCardClick(card) {
    setSelectedCard(card)
  }


  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard({})
  }

  return (
    <div className="page">
      <Header />
      <ImagePopup        
        cardData={selectedCard}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        btnAriaLabel="Изменить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="form__input">
          <input className="form__item" type="url" name="avatar" placeholder="Ссылка на картинку" autoComplete="off"
            required />
          <span className="form__item-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        btnAriaLabel="Cохранить данные профиля"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="form__input">
          <input className="form__item" type="text" name="name" placeholder="Имя" autoComplete="off" required
            minLength="2" maxLength="40" />

          <span className="form__item-error"></span>
        </div>

        <div className="form__input">
          <input className="form__item form__item_bottom" type="text" name="about" placeholder="О себе"
            autoComplete="off" required minLength="2" maxLength="200" />

          <span className="form__item-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name="card"
        title="Новое место"
        buttonText="Создать"
        btnAriaLabel="Создать новую карточку"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="form__input">
          <input className="form__item" type="text" name="name" placeholder="Название" autoComplete="off" required
            minLength="2" maxLength="30" />
          <span className="form__item-error"></span>
        </div>

        <div className="form__input">
          <input className="form__item form__item_bottom" type="url" name="link" placeholder="Ссылка на картинку"
            autoComplete="off" required />
          <span className="form__item-error"></span>
        </div>
      </PopupWithForm>

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />
    </div>
  );
}

export default App;
