let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let submitButton = document.querySelector('.form__submit-button');

function getUserCard() {
  let profileName = document.querySelector('.profile__name');
  let profileDescription = document.querySelector('.profile__description');
  return {"profileName": profileName, "profileDescription": profileDescription}
}

function getProfileForm() {
  let newProfileName = document.querySelector('.form__input-text-profile-name');
  let newProfileDescription = document.querySelector('.form__input-text-profile-description');
  return {"newProfileName": newProfileName, "newProfileDescription": newProfileDescription}
}

function openPopup() {
  let userCard = getUserCard();
  let newUserCard = getProfileForm()
  newUserCard.newProfileName.value = userCard.profileName.textContent;
  newUserCard.newProfileDescription.value = userCard.profileDescription.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function updateUserCard() {
  let userCard = getUserCard();
  let newUserCard = getProfileForm()
  userCard.profileName.textContent = newUserCard.newProfileName.value;
  userCard.profileDescription.textContent = newUserCard.newProfileDescription.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
submitButton.addEventListener('click', updateUserCard);
