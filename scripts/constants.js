const initialCards = [
  {name: "Париж, Франция", link: "./images/Paris.jpg"},
  {name: "Абиско, Швеция", link: "./images/Abisco.jpg"},
  {name: "Копенгаген, Дания", link: "./images/Kopengagen.jpg"},
  {name: "Брюссель, Бельгия", link: "./images/Brussels.jpg"},
  {name: "Мыс Рока, Португалия", link: "./images/Cabo_da_Roca.jpg"},
  {name: "Цюрих, Швейцария", link: "./images/Zurich.jpg"}
]

const popupImage = document.querySelector('.popup-image');
const closePopupImageButton = document.querySelector('.popup__close-button_image');

const popupProfile = document.querySelector('.popup-profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const submitProfileForm = document.querySelector('.form-profile');
const closePopupProfileButton = document.querySelector('.popup__close-button_profile');

const popupAddCard = document.querySelector('.popup-add-card');
const addCardButton = document.querySelector('.profile__add-button');
const submitCardButton = popupAddCard.querySelector('.form__submit-button');
const closePopupAddCardButton = document.querySelector('.popup__close-button_add-card');
const submitAddCardForm = document.querySelector('.form-add-card');
