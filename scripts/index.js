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
