import {
  profilePopupSelectors,
  addCardPopupSelectors,
  avatarPopupSelectors,
} from './selectors.js';

export const editProfileButton = document.querySelector(profilePopupSelectors.editButtonSelector);
export const editAvatarButton = document.querySelector(avatarPopupSelectors.editButtonSelector);
export const addCardButton = document.querySelector(addCardPopupSelectors.addButtonSelector);
