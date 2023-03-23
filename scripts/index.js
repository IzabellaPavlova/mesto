import FormValidator from './FormValidator.js';
import Card from './Card.js';
import {
  validatorSelectors,
  cardSelectors,
  popupSelectors,
  profilePopupSelectors,
  addCardPopupSelectors,
  cardTemplateSelector
} from "./selectors.js";

import {
  initialCards,
  galeryElement,
  popupList,
  popupImageItem,
  popupImageCaption,
  popupProfile,
  editProfileButton,
  submitProfileButton,
  popupAddCard,
  addCardButton,
  submitAddCardForm,
  popupImage
} from './constants.js';

// Gallery cards

const createCard = (card) => {
  const cardElement = new Card(card, cardTemplateSelector, cardSelectors, handleCardClick);
  return cardElement;
}

const createGaleryCards = (cards) => {
  cards.forEach((card) => {
    const cardElement = createCard(card);
    galeryElement.append(cardElement.generateCard());
  })
}

// Validations

const formValidators = {}

const enableValidation = (validatorSelectors) => {
  const formList = Array.from(document.querySelectorAll(validatorSelectors.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(validatorSelectors, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
   validator.enableValidation();
  });
}

// Popups

const closePopup = (popupElement) => {
  popupElement.classList.remove(popupSelectors.openPopupClass);
  document.removeEventListener('keydown', closePopupEsc);
}

const openPopup = (popupElement) => {
  popupElement.classList.add(popupSelectors.openPopupClass);
  document.addEventListener('keydown', closePopupEsc);
}

const closePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(popupSelectors.openPopupSelector);
    closePopup(openPopup);
  }
}

const setOutClickListeners = (popups) => {
  popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains(popupSelectors.openPopupClass)) {
        closePopup(popup)
      }
      if (evt.target.classList.contains(popupSelectors.closeButtonClass)) {
        closePopup(popup)
      }
  })
  });
}

// Pop-up profile

const fillPopupProfile = () => {
  newUserCard.newProfileName.value = userCard.profileName.textContent;
  newUserCard.newProfileDescription.value = userCard.profileDescription.textContent;
}

const getUserCard = () => {
  const profileName = document.querySelector(profilePopupSelectors.nameSelector);
  const profileDescription = document.querySelector(profilePopupSelectors.descriptionSelector);
  return { profileName, profileDescription }
}

const getProfileForm = () => {
  const newProfileName = document.querySelector(profilePopupSelectors.inputNameSelector);
  const newProfileDescription = document.querySelector(profilePopupSelectors.inputDescriptionSelector);
  return { newProfileName, newProfileDescription }
}

const openPopupProfile = () => {
  formValidators[profilePopupSelectors.formClass].resetValidation();
  fillPopupProfile();
  openPopup(popupProfile);
}

const updateUserCard = () => {
  userCard.profileName.textContent = newUserCard.newProfileName.value;
  userCard.profileDescription.textContent = newUserCard.newProfileDescription.value;
  closePopup(popupProfile);
}

const userCard = getUserCard();
const newUserCard = getProfileForm();

editProfileButton.addEventListener('click', openPopupProfile);
submitProfileButton.addEventListener('submit', updateUserCard);

// Pop-up new card

const openPopupAddCard = () => {
  submitAddCardForm.reset();
  formValidators[addCardPopupSelectors.formClass].resetValidation();
  openPopup(popupAddCard);
}

const getAddCardForm = () => {
  const newCardName = document.querySelector(addCardPopupSelectors.inputNameSelector);
  const newCardLink = document.querySelector(addCardPopupSelectors.inputLinkSelector);
  return { newCardName, newCardLink }
}

const addNewCard = () => {
  const cardElement = createCard({ "link": newCard.newCardLink.value, "name": newCard.newCardName.value })
  galeryElement.prepend(cardElement.generateCard());
  closePopup(popupAddCard);
}

const newCard = getAddCardForm();

addCardButton.addEventListener('click', openPopupAddCard);
submitAddCardForm.addEventListener('submit', addNewCard);

// Popup image

const handleCardClick = (imageSrc, cardTitle) => {
  popupImageItem.src = imageSrc;
  popupImageItem.alt = cardTitle;
  popupImageCaption.textContent = cardTitle;
  openPopup(popupImage);
}

createGaleryCards(initialCards);
fillPopupProfile(); // fill profile form so that inputs fields are valid before openning the form
enableValidation(validatorSelectors);
setOutClickListeners(popupList);
