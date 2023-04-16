import '../pages/index.css';

import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';

import {
  cardSelectors,
  popupSelectors,
  profilePopupSelectors,
  cardTemplateSelector,
  imagePopupSelectors,
  gallerySelectors,
  validatorSelectors,
  addCardPopupSelectors
} from "../utils/selectors.js";

import {
  initialCards,
  editProfileButton,
  addCardButton
} from '../utils/constants.js';

// Galery cards

const popupImage = new PopupWithImage(
  imagePopupSelectors.elementSelector,
  popupSelectors
);
popupImage.setEventListeners();

const createCard = (card, cardTemplateSelector, cardSelectors) => {
  const cardElement = new Card(card, cardTemplateSelector, cardSelectors, () => {
    popupImage.open(card.link, card.name);
  });
  return cardElement.generateCard();
}

const galeryCards = new Section({
  items: initialCards, renderer: (item) => {
    const cardElement = createCard(item, cardTemplateSelector, cardSelectors);
    galeryCards.addItem(cardElement);
  }
}, gallerySelectors.elementSelector)
galeryCards.renderItems();

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
enableValidation(validatorSelectors);

// Profile popup

const userInfo = new UserInfo({
  nameSelector: profilePopupSelectors.nameSelector,
  descriptionSelector: profilePopupSelectors.descriptionSelector
});

const popupProfile = new PopupWithForm(profilePopupSelectors.elementSelector, popupSelectors, (userCard) => {
  userInfo.setUserInfo({ profileName: userCard.name, profileDescription: userCard.description });
})
popupProfile.setEventListeners();

editProfileButton.addEventListener('click', () => {
  formValidators[profilePopupSelectors.formName].resetValidation();
  const userInfoData = userInfo.getUserInfo();
  popupProfile.setFormValues({ name: userInfoData.profileName, description: userInfoData.profileDescription })
  popupProfile.open();
})

// Add new card popup

const popupAddNewCard = new PopupWithForm(addCardPopupSelectors.elementSelector, popupSelectors, (newCardData) => {
  const newCard = createCard(
    newCardData,
    cardTemplateSelector,
    cardSelectors
  );
  galeryCards.addNewItem(newCard);
})
popupAddNewCard.setEventListeners();

addCardButton.addEventListener('click', () => {
  formValidators[addCardPopupSelectors.formName].resetValidation();
  popupAddNewCard.open();
})
