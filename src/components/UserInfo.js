export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
  }

  getUserInfo = () => {
    return {
      profileName: this._nameElement.textContent,
      profileDescription: this._descriptionElement.textContent,
    }
  }

  setUserInfo = ({ profileName, profileDescription }) => {
    this._nameElement.textContent = profileName;
    this._descriptionElement.textContent = profileDescription;
  }
}
