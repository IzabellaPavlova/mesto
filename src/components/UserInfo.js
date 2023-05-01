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
    if (profileName){
      this._nameElement.textContent = profileName;
    }
    else {
      console.error('No profile name');
    }
    if (profileDescription) {
      this._descriptionElement.textContent = profileDescription;
    }
    else {
      console.error('No profile description');
    }
  }

  setUserAvatar({ profileAvatarLink }) {
    if (profileAvatarLink) {
      this._avatarElement.src = profileAvatarLink;
    }
    else {
      console.error('No profile avatar link');
    }
  }

  addUserId(userId) {
    this._userId = userId;
  }

  getUserId() {
    return this._userId;
  }
}
