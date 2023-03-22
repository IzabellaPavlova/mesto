export const validatorSelectors = {
  formSelector: '.form',
  InputSelector: '.form__input',
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
  likeButtonSelector: '.card__like-button'
}

export const gallerySelectors = {
  elementSelector: '.galery__cards'
}

export const popupSelectors = {
  elementSelector: '.popup',
  imageSelector: '.popup__image',
  imageCaptionSelector: '.popup__image-caption',
  closeImageButtonSelector: '.popup__close-button_image',
  openPopupClass: 'popup_opened',
  openPopupSelector: '.popup_opened'
}

export const profilePopupSelectors = {
  formClass: 'form-profile',
  formSelector: '.form-profile',
  elementSelector: '.popup-profile',
  editButtonSelector: '.profile__edit-button',
  closeButtonSelector: '.popup__close-button_profile',
  nameSelector: '.profile__name',
  descriptionSelector: '.profile__description',
  inputNameSelector: '.form__input_text-profile_name',
  inputDescriptionSelector: '.form__input_text-profile_description'
}

export const addCardPopupSelectors = {
  formClass: 'form-add-card',
  formSelector: '.form-add-card',
  elementSelector: '.popup-add-card',
  addButtonSelector: '.profile__add-button',
  submitButtonSelector: '.form__submit-button',
  closeButtonSelector: '.popup__close-button_add-card',
  inputNameSelector: '.form__input_text-add-card_name',
  inputLinkSelector: '.form__input_text-add-card_link'
}

export const imagePopupSelectors = {
  elementSelector: '.popup-image'
}

export const cardTemplateSelector = '#card';
