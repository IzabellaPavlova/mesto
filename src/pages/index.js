import '../pages/index.css';

import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

import {
  cardSelectors,
  popupSelectors,
  profilePopupSelectors,
  cardTemplateSelector,
  imagePopupSelectors,
  gallerySelectors,
  validatorSelectors,
  addCardPopupSelectors,
  avatarPopupSelectors,
  confirmPopupSelectors
} from "../utils/selectors.js";

import {
  editProfileButton,
  addCardButton,
  editAvatarButton
} from '../utils/constants.js';

// API

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'd90c8a76-abbc-4d2c-b6c2-11d5551fc5a6',
    'Content-Type': 'application/json',
  }
})

// Galery cards

const popupImage = new PopupWithImage(
  imagePopupSelectors.elementSelector,
  popupSelectors
);
popupImage.setEventListeners();

const createCard = (card, cardTemplateSelector, cardSelectors) => {
  const cardElement = new Card({
    data: card,
    cardTemplateSelector: cardTemplateSelector,
    cardSelectors: cardSelectors,
    userId: userInfo.getUserId(),
    handleCardClick: () => {
      popupImage.open(card.link, card.name);
    },
    handleLikeClick: () => {
      if (cardElement.isLiked) {
        api.removeCardLike(cardElement.getCardId()).then((data) => {
          cardElement.removeLike();
          cardElement.updateLikeCounter(data.likes);
        }).catch((error) => {
          console.error(error);
        });
      }
      else {
        api.addCardLike(cardElement.getCardId()).then((data) => {
          cardElement.addLike();
          cardElement.updateLikeCounter(data.likes);
        }).catch((error) => {
          console.error(error);
        });
      }
    },
    handleDeleteClick: () => {
      popupConfirmDelete.setHandlerSubmitForm(() => {
        api.removeCard(cardElement.getCardId()).then(() => {
          cardElement.handleDeleteClick();
          popupConfirmDelete.close();
        }).catch((error) => {
          console.error(error);
        });
      });
      popupConfirmDelete.open();
    },
  });
  return cardElement.generateCard();
}

// Render cards and profile

const galeryCards = new Section({
  renderer: (item) => {
    const cardElement = createCard(item, cardTemplateSelector, cardSelectors);
    galeryCards.addItem(cardElement);
  }
}, gallerySelectors.elementSelector)

const userInfo = new UserInfo({
  nameSelector: profilePopupSelectors.nameSelector,
  descriptionSelector: profilePopupSelectors.descriptionSelector,
  avatarSelector: profilePopupSelectors.avatarSelector,
});

Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([userData, cards]) => {
  userInfo.setUserInfo({ profileName: userData.name, profileDescription: userData.about });
  userInfo.setUserAvatar({ profileAvatarLink: userData.avatar });
  userInfo.addUserId(userData._id);
  galeryCards.renderItems(cards);
}).catch((error) => {
  console.error(error);
});

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

const popupProfile = new PopupWithForm(profilePopupSelectors.elementSelector, popupSelectors, (userCard) => {
  popupProfile.isLoadingMessage(true);
  api.updateUserInfo({ name: userCard.name, about: userCard.description }).then((data) => {
    userInfo.setUserInfo({ profileName: data.name, profileDescription: data.about });
    popupProfile.close();
  }).catch((error) => {
    console.error(error);
  }).finally(() => {
    popupProfile.isLoadingMessage(false);
  })
})
popupProfile.setEventListeners();

editProfileButton.addEventListener('click', () => {
  formValidators[profilePopupSelectors.formName].resetValidation();
  const userInfoData = userInfo.getUserInfo();
  popupProfile.setFormValues({ name: userInfoData.profileName, description: userInfoData.profileDescription });
  popupProfile.open();
})

// Avatar popup

const popupAvatar = new PopupWithForm(avatarPopupSelectors.elementSelector, popupSelectors, (userAvatar) => {
  popupAvatar.isLoadingMessage(true);
  api.updateProfileAvatar({ avatar: userAvatar.link }).then((data) => {
    userInfo.setUserAvatar({ profileAvatarLink: data.avatar });
    popupAvatar.close();
  }).catch((error) => {
    console.error(error);
  }).finally(() => {
    popupAvatar.isLoadingMessage(false);
  })
})
popupAvatar.setEventListeners();

editAvatarButton.addEventListener('click', () => {
  formValidators[avatarPopupSelectors.formName].resetValidation();
  const profileAvatar = userInfo.getUserAvatar();
  popupAvatar.setFormValues({ link: profileAvatar.profileAvatarLink });
  popupAvatar.open();
})

// Add new card popup

const popupAddNewCard = new PopupWithForm(addCardPopupSelectors.elementSelector, popupSelectors, (newCardData) => {
  popupAddNewCard.isLoadingMessage(true);
  const newCard = { name: newCardData.name, link: newCardData.link }
  api.addNewCard(newCard).then((data) => {
    const newCardElement = createCard(
      data,
      cardTemplateSelector,
      cardSelectors
    );
    galeryCards.addNewItem(newCardElement);
    popupAddNewCard.close();
  }).catch((error) => {
    console.error(error);
  }).finally(() => {
    popupAddNewCard.isLoadingMessage(false);
  })
})
popupAddNewCard.setEventListeners();

addCardButton.addEventListener('click', () => {
  formValidators[addCardPopupSelectors.formName].resetValidation();
  popupAddNewCard.open();
})

// Confirm delete popup

const popupConfirmDelete = new PopupWithConfirm(confirmPopupSelectors.elementSelector, popupSelectors);
popupConfirmDelete.setEventListeners();
