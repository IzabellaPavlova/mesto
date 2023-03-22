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
  closePopupImageButton,
  popupProfile,
  editProfileButton,
  closePopupProfileButton,
  submitProfileButton,
  popupAddCard,
  addCardButton,
  closePopupAddCardButton,
  submitAddCardForm,
  popupImage
} from './constants.js';

// Gallery cards
function createGaleryCards(cards) {
  cards.forEach(function (card) {
    const cardElement = new Card(card, cardTemplateSelector, cardSelectors);
    galeryElement.append(cardElement.generateCard());
  })
}

function addValidation() {
  ProfileFormValidator.enableValidation();
  AddCardValidator.enableValidation();
}

// Popups

function closePopup(popupElement) {
  popupElement.classList.remove(popupSelectors.openPopupClass);
  document.removeEventListener('keydown', closePopupEsc);
}

function openPopup(popupElement) {
  popupElement.classList.add(popupSelectors.openPopupClass);
  document.addEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
  const openPopup = document.querySelector(popupSelectors.openPopupSelector);
  if (evt.key === "Escape") {
    closePopup(openPopup);
  }
}

function closePopupOutClick(popupElement) {
  popupElement.addEventListener('mousedown', function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(popupElement);
    }
  });
}

function setOutClickListeners(elements) {
  elements.forEach((element) => {
    closePopupOutClick(element);
  });
}

// Pop-up profile

const userCard = getUserCard();
const newUserCard = getProfileForm()

function fillPopupProfile() {
  newUserCard.newProfileName.value = userCard.profileName.textContent;
  newUserCard.newProfileDescription.value = userCard.profileDescription.textContent;
}

function getUserCard() {
  const profileName = document.querySelector(profilePopupSelectors.nameSelector);
  const profileDescription = document.querySelector(profilePopupSelectors.descriptionSelector);
  return { profileName, profileDescription }
}

function getProfileForm() {
  const newProfileName = document.querySelector(profilePopupSelectors.inputNameSelector);
  const newProfileDescription = document.querySelector(profilePopupSelectors.inputDescriptionSelector);
  return { newProfileName, newProfileDescription }
}

function openPopupProfile() {
  ProfileFormValidator.resetValidation();
  fillPopupProfile();
  openPopup(popupProfile);
}

function updateUserCard() {
  userCard.profileName.textContent = newUserCard.newProfileName.value;
  userCard.profileDescription.textContent = newUserCard.newProfileDescription.value;
  closePopup(popupProfile);
}

editProfileButton.addEventListener('click', openPopupProfile);
closePopupProfileButton.addEventListener('click', () => closePopup(popupProfile));
submitProfileButton.addEventListener('submit', updateUserCard);

// Pop-up new card

const newCard = getAddCardForm();

function openPopupAddCard() {
  submitAddCardForm.reset();
  AddCardValidator.resetValidation();
  openPopup(popupAddCard);
}

function getAddCardForm() {
  const newCardName = document.querySelector(addCardPopupSelectors.inputNameSelector);
  const newCardLink = document.querySelector(addCardPopupSelectors.inputLinkSelector);
  return { newCardName, newCardLink }
}

function addNewCard() {
  const cardElement = new Card(
    { "link": newCard.newCardLink.value, "name": newCard.newCardName.value },
    cardTemplateSelector,
    cardSelectors);
  galeryElement.prepend(cardElement.generateCard());
  closePopup(popupAddCard);
}

addCardButton.addEventListener('click', openPopupAddCard);
closePopupAddCardButton.addEventListener('click', () => closePopup(popupAddCard));
submitAddCardForm.addEventListener('submit', addNewCard);

// Popup image

export function openPopupImage(imageSrc, cardTitle) {
  popupImageItem.src = imageSrc;
  popupImageItem.alt = cardTitle;
  popupImageCaption.textContent = cardTitle;
  openPopup(popupImage);
}

closePopupImageButton.addEventListener('click', () => closePopup(popupImage));

createGaleryCards(initialCards);

// fill profile form so that inputs fields are valid before openning the form
fillPopupProfile();
const ProfileFormValidator = new FormValidator(validatorSelectors, document.forms[profilePopupSelectors.formClass]);
const AddCardValidator = new FormValidator(validatorSelectors, document.forms[addCardPopupSelectors.formClass]);
addValidation();
// set esc and outPopup close listeners
setOutClickListeners(popupList);
