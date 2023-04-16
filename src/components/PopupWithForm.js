import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(elementSelector, popupSelectors, handlerSubmitForm) {
    super(elementSelector, popupSelectors);
    this._formElement = this._popup.querySelector(popupSelectors.formSelector);
    this._inputList = this._formElement.querySelectorAll(popupSelectors.inputSelector);
    this._handlerSubmitForm = handlerSubmitForm;
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach(input => {
      formValues[input.name] =input.value;
    });
    return formValues;
  }

  setFormValues(formValues) {
    this._inputList.forEach(input => {
      input.value = formValues[input.name]
    });
  }

  close() {
    this._formElement.reset();
    super.close();
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handlerSubmitForm(this._getInputValues());
      this.close();
    });

    super.setEventListeners();
  }
}
