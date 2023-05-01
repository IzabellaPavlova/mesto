import Popup from './Popup.js'

export default class PopupWithConfirm extends Popup {
  constructor(elementSelector, popupSelectors) {
    super(elementSelector, popupSelectors);
    this._formElement = this._popup.querySelector(popupSelectors.formSelector);
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handlerSubmitForm();
    });
    super.setEventListeners();
  }

  setHandlerSubmitForm(handlerSubmitForm) {
    this._handlerSubmitForm = handlerSubmitForm;
  }
}
