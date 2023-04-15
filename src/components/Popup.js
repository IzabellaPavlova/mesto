export default class Popup {
  constructor(elementSelector, popupSelectors) {
    this._popupSelectors = popupSelectors;
    this._popup = document.querySelector(elementSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add(this._popupSelectors.openPopupClass);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(this._popupSelectors.openPopupClass);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains(this._popupSelectors.openPopupClass)) {
        this.close();
      }
      if (evt.target.classList.contains(this._popupSelectors.closeButtonClass)) {
        this.close();
      }
    })
  }

}
