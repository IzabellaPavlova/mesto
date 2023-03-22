import {
  gallerySelectors,
  popupSelectors,
  profilePopupSelectors,
  addCardPopupSelectors,
  imagePopupSelectors,
} from "./selectors.js";

export const initialCards = [
  {name: "Париж, Франция", link: "./images/Paris.jpg"},
  {name: "Абиско, Швеция", link: "./images/Abisco.jpg"},
  {name: "Копенгаген, Дания", link: "./images/Kopengagen.jpg"},
  {name: "Брюссель, Бельгия", link: "./images/Brussels.jpg"},
  {name: "Мыс Рока, Португалия", link: "./images/Cabo_da_Roca.jpg"},
  {name: "Цюрих, Швейцария", link: "./images/Zurich.jpg"}
]

export const galeryElement = document.querySelector(gallerySelectors.elementSelector);

export const popupList = document.querySelectorAll(popupSelectors.elementSelector);
export const popupImageItem = document.querySelector(popupSelectors.imageSelector);
export const popupImageCaption = document.querySelector(popupSelectors.imageCaptionSelector);
export const closePopupImageButton = document.querySelector(popupSelectors.closeImageButtonSelector);

export const popupProfile = document.querySelector(profilePopupSelectors.elementSelector);
export const editProfileButton = document.querySelector(profilePopupSelectors.editButtonSelector);
export const closePopupProfileButton = document.querySelector(profilePopupSelectors.closeButtonSelector);
export const submitProfileButton = document.querySelector(profilePopupSelectors.formSelector);

export const popupAddCard = document.querySelector(addCardPopupSelectors.elementSelector);
export const addCardButton = document.querySelector(addCardPopupSelectors.addButtonSelector);
export const closePopupAddCardButton = document.querySelector(addCardPopupSelectors.closeButtonSelector);
export const submitAddCardForm = document.querySelector(addCardPopupSelectors.formSelector);

export const popupImage = document.querySelector(imagePopupSelectors.elementSelector);
