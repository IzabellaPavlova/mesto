// Gallery cards

function getCardElement(imageSrc, cardTitle) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = imageSrc;
  cardElement.querySelector('.card__image').alt = cardTitle;
  cardElement.querySelector('.card__title').textContent = cardTitle;
  cardElement.querySelector('.card__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
  cardElement.querySelector('.card__delete-button').addEventListener('click', function() {
    cardElement.remove();
  });
  cardElement.querySelector('.card__image').addEventListener('click', function(evt) {
    openPopupImage(imageSrc = evt.target.src, cardTitle = evt.target.alt);
  });
  return cardElement;
}

closePopupImageButton.addEventListener('click', () => closePopup(popupImage));

function openPopupImage(imageSrc, cardTitle) {
  const popupImageItem = document.querySelector('.popup__image');
  popupImageItem.src = imageSrc;
  popupImageItem.alt = cardTitle;
  const popupImageCaption = document.querySelector('.popup__image-caption');
  popupImageCaption.textContent = cardTitle;
  openPopup(popupImage);
}

function createGaleryCards(cards) {
  const galeryElement = document.querySelector('.galery__cards');
  cards.forEach(function (card) {
    const cardElement = getCardElement(card.link, card.name);
    galeryElement.append(cardElement);
  })
}

// Popups
const popups = document.querySelectorAll('.popup');

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc(popupElement));
}

function openPopup(popupElement) {
  resetError(popupElement, selectors);
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc(popupElement));
}

function closePopupEsc(popupElement) {
  return function(evt) {
    if( evt.key === "Escape"){
      closePopup(popupElement);
    }
  }
}

function closePopupOutClick(popupElement) {
  popupElement.addEventListener('click', function(evt) {
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
  submitAddCardForm.reset();
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
  const galeryElement = document.querySelector('.galery__cards');
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
