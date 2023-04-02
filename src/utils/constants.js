import {
  gallerySelectors,
  popupSelectors,
  profilePopupSelectors,
  addCardPopupSelectors,
  imagePopupSelectors,
} from './selectors.js';

const parisImage = new URL('../images/Paris.jpg', import.meta.url);
const abiscoImage = new URL('../images/Abisco.jpg', import.meta.url);
const kopengagenImage = new URL('../images/Kopengagen.jpg', import.meta.url);
const brusselsImage = new URL('../images/Brussels.jpg', import.meta.url);
const caboImage = new URL('../images/Cabo_da_Roca.jpg', import.meta.url);
const zurichImage = new URL('../images/Zurich.jpg', import.meta.url);

export const initialCards = [
  {name: 'Париж, Франция', link: parisImage},
  {name: 'Абиско, Швеция', link: abiscoImage},
  {name: 'Копенгаген, Дания', link: kopengagenImage},
  {name: 'Брюссель, Бельгия', link: brusselsImage},
  {name: 'Мыс Рока, Португалия', link: caboImage},
  {name: 'Цюрих, Швейцария', link: zurichImage}
]

export const galeryElement = document.querySelector(gallerySelectors.elementSelector);

export const popupList = document.querySelectorAll(popupSelectors.elementSelector);
export const popupImageItem = document.querySelector(popupSelectors.imageSelector);
export const popupImageCaption = document.querySelector(popupSelectors.imageCaptionSelector);

export const popupProfile = document.querySelector(profilePopupSelectors.elementSelector);
export const editProfileButton = document.querySelector(profilePopupSelectors.editButtonSelector);
export const submitProfileButton = document.querySelector(profilePopupSelectors.formSelector);

export const popupAddCard = document.querySelector(addCardPopupSelectors.elementSelector);
export const addCardButton = document.querySelector(addCardPopupSelectors.addButtonSelector);
export const submitAddCardForm = document.querySelector(addCardPopupSelectors.formSelector);

export const popupImage = document.querySelector(imagePopupSelectors.elementSelector);
