export const validatorSelectors = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
};

export const cardSelectors = {
  elementSelector: '.card',
  titleSelector: '.card__title',
  imageSelector: '.card__image',
  activeLikeButtonClass: 'card__like-button_active',
  deleteButtonSelector: '.card__delete-button',
  likeButtonSelector: '.card__like-button',
  likeCounterSelector: '.card__like-count'
}

export const gallerySelectors = {
  elementSelector: '.galery__cards'
}

export const popupSelectors = {
  elementSelector: '.popup',
  imageSelector: '.popup__image',
  imageCaptionSelector: '.popup__image-caption',
  formSelector: '.form',
  inputSelector: '.form__input',
  closeButtonClass: 'popup__close-button',
  submitButtonSelector: '.form__submit-button',
  openPopupClass: 'popup_opened',
  openPopupSelector: '.popup_opened'
}

export const profilePopupSelectors = {
  formName: 'form-profile',
  formSelector: '.form-profile',
  elementSelector: '.popup-profile',
  editButtonSelector: '.profile__edit-button',
  nameSelector: '.profile__name',
  descriptionSelector: '.profile__description',
  avatarSelector: '.profile__avatar',
  inputNameSelector: '.form__input_text-profile_name',
  inputDescriptionSelector: '.form__input_text-profile_description'
}

export const avatarPopupSelectors = {
  formName: 'form-avatar',
  formSelector: '.form-avatar',
  elementSelector: '.popup-avatar',
  editButtonSelector: '.profile__edit-avatar-button',
  avatarSelector: '.profile__avatar',
  inputAvatarSelector: '.form__input_text-avatar_link'
}

export const addCardPopupSelectors = {
  formName: 'form-add-card',
  formSelector: '.form-add-card',
  elementSelector: '.popup-add-card',
  addButtonSelector: '.profile__add-button',
  submitButtonSelector: '.form__submit-button',
  inputNameSelector: '.form__input_text-add-card_name',
  inputLinkSelector: '.form__input_text-add-card_link'
}

export const imagePopupSelectors = {
  elementSelector: '.popup-image'
}

export const confirmPopupSelectors = {
  elementSelector: '.popup-confirm'
}

export const cardTemplateSelector = '#card';
