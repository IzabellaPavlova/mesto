// Gallery cards
const galeryElement = document.querySelector('.galery__cards');
const popupImageItem = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

function getCardElement(imageSrc, cardTitle) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  cardImage.src = imageSrc;
  cardImage.alt = cardTitle;
  cardElement.querySelector('.card__title').textContent = cardTitle;
  cardLikeButton.addEventListener('click', toggleLikeButton);
  cardDeleteButton.addEventListener('click', () => deleteCard(cardElement));
  cardImage.addEventListener('click', () => openPopupImage(imageSrc, cardTitle));
  return cardElement;
}

closePopupImageButton.addEventListener('click', () => closePopup(popupImage));

function openPopupImage(imageSrc, cardTitle) {
  popupImageItem.src = imageSrc;
  popupImageItem.alt = cardTitle;
  popupImageCaption.textContent = cardTitle;
  openPopup(popupImage);
}

function createGaleryCards(cards) {
  cards.forEach(function (card) {
    const cardElement = getCardElement(card.link, card.name);
    galeryElement.append(cardElement);
  })
}

function deleteCard(cardElement) {
  cardElement.remove();
}

function toggleLikeButton(evt) {
  evt.target.classList.toggle('card__like-button_active');
}

// Popups
const popups = document.querySelectorAll('.popup');

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
  const openPopup = document.querySelector('.popup_opened');
  if( evt.key === "Escape"){
    closePopup(openPopup);
  }
}

function closePopupOutClick(popupElement) {
  popupElement.addEventListener('mousedown', function(evt) {
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
  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');
  return {profileName, profileDescription}
}

function getProfileForm() {
  const newProfileName = document.querySelector('.form__input_text-profile_name');
  const newProfileDescription = document.querySelector('.form__input_text-profile_description');
  return {newProfileName, newProfileDescription}
}

function openPopupProfile() {
  resetError(popupProfile, selectors);
  fillPopupProfile();
  openPopup(popupProfile);
}

function updateUserCard(evt) {
  evt.preventDefault();
  userCard.profileName.textContent = newUserCard.newProfileName.value;
  userCard.profileDescription.textContent = newUserCard.newProfileDescription.value;
  closePopup(popupProfile);
}

editProfileButton.addEventListener('click', openPopupProfile);
closePopupProfileButton.addEventListener('click', () => closePopup(popupProfile));
submitProfileForm.addEventListener('submit', updateUserCard);

// Pop-up new card

const newCard = getAddCardForm();

function openPopupAddCard() {
  resetError(popupAddCard, selectors);
  submitAddCardForm.reset();
  const inputList = Array.from(popupAddCard.querySelectorAll(selectors.InputSelector));
  toggleButtonState(inputList, submitCardButton, selectors);
  openPopup(popupAddCard);
}

function getAddCardForm() {
  const newCardName = document.querySelector('.form__input_text-add-card_name');
  const newCardLink = document.querySelector('.form__input_text-add-card_link');
  return {newCardName, newCardLink}
}

function addNewCard(evt) {
  evt.preventDefault();
  const cardElement = getCardElement(newCard.newCardLink.value, newCard.newCardName.value);
  galeryElement.prepend(cardElement);
  closePopup(popupAddCard);
}

addCardButton.addEventListener('click', openPopupAddCard);
closePopupAddCardButton.addEventListener('click', () => closePopup(popupAddCard));
submitAddCardForm.addEventListener('submit', addNewCard);

// Execute while page is loading

// add cards to the page
createGaleryCards(initialCards);
// fill profile form so that inputs fields are valid before openning the form
fillPopupProfile();
// set esc and outPopup close listeners
setOutClickListeners(popups);
