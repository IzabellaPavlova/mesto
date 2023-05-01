export default class UserInfo {
  constructor({ nameSelector, descriptionSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      profileName: this._nameElement.textContent,
      profileDescription: this._descriptionElement.textContent,
    }
  }

  getUserAvatar() {
    return { profileAvatarLink: this._avatarElement.textContent }
  }

  setUserInfo({ profileName, profileDescription }) {
    this._nameElement.textContent = profileName;
    this._descriptionElement.textContent = profileDescription;
  }

  setUserAvatar({ profileAvatarLink }) {
    this._avatarElement.src = profileAvatarLink;
  }

  addUserId(userId) {
    this._userId = userId;
  }

  getUserId() {
    return this._userId;
  }
}
