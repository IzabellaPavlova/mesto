// Gallery cards

const initialCards = [
  {name: "Париж, Франция", link: "./images/Paris.jpg"},
  {name: "Абиско, Швеция", link: "./images/Abisco.jpg"},
  {name: "Копенгаген, Дания", link: "./images/Kopengagen.jpg"},
  {name: "Брюссель, Бельгия", link: "./images/Brussels.jpg"},
  {name: "Мыс Рока, Португалия", link: "./images/Cabo_da_Roca.jpg"},
  {name: "Цурих, Швейцария", link: "./images/Zurich.jpg"}
]

function getCardElement(imageSrc, cardTitle) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = imageSrc;
  cardElement.querySelector('.card__image').alt = cardTitle;
  cardElement.querySelector('.card__title').textContent = cardTitle;
  cardElement.querySelector('.card__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
  cardElement.querySelector('.card__delete-button').addEventListener('click', function(evt) {
    const card = evt.target.parentNode;
    const galeryElement = document.querySelector('.galery__cards');
    galeryElement.removeChild(card);
  });
  cardElement.querySelector('.card__image').addEventListener('click', function(evt) {
    openPopupImage(evt.target);
  });
  return cardElement;
}

let popupImage = document.querySelector('.popup-image');
let closePopupImageButton = document.querySelector('.popup__close-button_image');

console.log(closePopupImageButton.outerHTML);

closePopupImageButton.addEventListener('click', () => closePopup(popupImage));

function openPopupImage(card) {
  let popupImageItem = document.querySelector('.popup__image');
  popupImageItem.src = card.src;
  popupImageItem.alt = card.alt;
  let popupImageCaption = document.querySelector('.popup__image-caption');
  popupImageCaption.textContent = card.alt;
  popupImage.classList.add('popup_opened');
}

function createGaleryCards(cards) {
  const galeryCards = cards.map(function(card) {
    const cardElement = getCardElement(card.link, card.name);
    return cardElement;
  })
  const galeryElement = document.querySelector('.galery__cards');
  galeryCards.forEach(card => {
    galeryElement.append(card);
  });
}

createGaleryCards(initialCards);

// Popups

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

// Pop-up profile

let popupProfile = document.querySelector('.popup-profile');
let editProfileButton = document.querySelector('.profile__edit-button');
let submitProfileForm = document.querySelector('.form-profile');
let closePopupProfileButton = document.querySelector('.popup__close-button_profile');

let userCard = getUserCard();
let newUserCard = getProfileForm()

function getUserCard() {
  let profileName = document.querySelector('.profile__name');
  let profileDescription = document.querySelector('.profile__description');
  return {"profileName": profileName, "profileDescription": profileDescription}
}

function getProfileForm() {
  let newProfileName = document.querySelector('.form__input_text-profile_name');
  let newProfileDescription = document.querySelector('.form__input_text-profile_description');
  return {"newProfileName": newProfileName, "newProfileDescription": newProfileDescription}
}

function openPopupProfile() {
  newUserCard.newProfileName.value = userCard.profileName.textContent;
  newUserCard.newProfileDescription.value = userCard.profileDescription.textContent;
  popupProfile.classList.add('popup_opened');
}

function updateUserCard(popupElement) {
  return function(evt) {
    evt.preventDefault();
    userCard.profileName.textContent = newUserCard.newProfileName.value;
    userCard.profileDescription.textContent = newUserCard.newProfileDescription.value;
    closePopup(popupElement);
  }
}

editProfileButton.addEventListener('click', openPopupProfile);
closePopupProfileButton.addEventListener('click', () => closePopup(popupProfile));
submitProfileForm.addEventListener('submit', updateUserCard(popupProfile));

// Pop-up new card

let popupAddCard = document.querySelector('.popup-add-card');
let addCardButton = document.querySelector('.profile__add-button');
let closePopupAddCardButton = document.querySelector('.popup__close-button_add-card');
let submitAddCardForm = document.querySelector('.form-add-card');

let newCard = getAddCardForm();

function openPopupAddCard() {
  newCard.newCardName.value = '';
  newCard.newCardLink.value = '';
  popupAddCard.classList.add('popup_opened');
}

function getAddCardForm() {
  let newCardName = document.querySelector('.form__input_text-add-card_name');
  let newCardLink = document.querySelector('.form__input_text-add-card_link');
  return {"newCardName": newCardName, "newCardLink": newCardLink}
}

function addCard(popupElement) {
  return function(evt) {
    evt.preventDefault();
    const cardElement = getCardElement(newCard.newCardLink.value, newCard.newCardName.value);
    const galeryElement = document.querySelector('.galery__cards');
    galeryElement.prepend(cardElement);
    closePopup(popupElement);
  }
}

addCardButton.addEventListener('click', openPopupAddCard);
closePopupAddCardButton.addEventListener('click', () => closePopup(popupAddCard));
submitAddCardForm.addEventListener('submit', addCard(popupAddCard));
