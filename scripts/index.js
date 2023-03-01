// Gallery cards

const initialCards = [
  {name: "Париж, Франция", link: "./images/Paris.jpg"},
  {name: "Абиско, Швеция", link: "./images/Abisco.jpg"},
  {name: "Копенгаген, Дания", link: "./images/Kopengagen.jpg"},
  {name: "Брюссель, Бельгия", link: "./images/Brussels.jpg"},
  {name: "Мыс Рока, Португалия", link: "./images/Cabo_da_Roca.jpg"},
  {name: "Нойшванштайн, Германия", link: "./images/Neuschwanstein.jpg"}
]

function createGaleryCards(cards) {
  const cardTemplate = document.querySelector('#card').content;
  const galeryCards = cards.map(function(card) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;
    return cardElement;
  })
  const galeryElement = document.querySelector('.galery__cards');
  galeryCards.forEach(card => {
    galeryElement.append(card);
  });
}

createGaleryCards(initialCards);

// Pop-ups

let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let submitForm = document.querySelector('.form');

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

function openPopup() {
  newUserCard.newProfileName.value = userCard.profileName.textContent;
  newUserCard.newProfileDescription.value = userCard.profileDescription.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function updateUserCard(evt) {
  evt.preventDefault();
  userCard.profileName.textContent = newUserCard.newProfileName.value;
  userCard.profileDescription.textContent = newUserCard.newProfileDescription.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
submitForm.addEventListener('submit', updateUserCard);
