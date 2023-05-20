import React from 'react';
import editProfileImage from '../images/__edit_profile_image.svg';
import { api } from '../utils/Api';
import Card from './Card';


function Main(props) {

  const [userName, setUserName] = React.useState([]);
  const [userDescription, setUserDescription] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {

    Promise.all([
      api.getProfileData(),
      api.getInitialCards(),
    ])
      .then(([userData, cardsData]) => {
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)
        setCards(cardsData)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      });
  }, []);


  return (
    <main className="content">

      <section className="profile">
        <div className="profile__info">
          <div className="avatar">
            <div className="avatar__image"
              style={{
                backgroundImage: `url(${userAvatar})`,
              }}></div>
            <div className="avatar__overlay"></div>
            <button className="avatar__edit-button" arial-label="изменить аватар" type="button"
              onClick={props.onEditAvatar}>
              <img src={editProfileImage} />
            </button>
          </div>
          <div className="profile__rotor">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" aria-label="редактировать профиль"
              onClick={props.onEditProfile}>
            </button>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>

        <button className="profile__add-button" aria-label="добавить" type="button"
          onClick={props.onAddPlace}

        ></button>

      </section>


      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card card={card}
              key={card._id}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>

    </main>
  );
}

export default Main;