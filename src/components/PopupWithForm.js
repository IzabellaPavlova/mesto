import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(elementSelector, popupSelectors, handlerSubmitForm) {
    super(elementSelector, popupSelectors);
    this._formElement = this._popup.querySelector(popupSelectors.formSelector);
    this._inputList = this._formElement.querySelectorAll(popupSelectors.inputSelector);
    this._handlerSubmitForm = handlerSubmitForm;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] =input.value;
    });
    return this._formValues;
  }

  getFormValues() {
    return this._getInputValues();
  }

  getFormElement() {
    return this._formElement;
  }

  close() {
    this._formElement.reset();
    super.close();
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => this._handlerSubmitForm(evt));
    super.setEventListeners();
  }
}
