import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(elementSelector, popupSelectors) {
    super(elementSelector, popupSelectors);
    this._popupImageItem = this._popup.querySelector(popupSelectors.imageSelector);
    this._popupImageCaption = this._popup.querySelector(popupSelectors.imageCaptionSelector);
  }

  open (imageSrc, cardTitle) {
    this._popupImageItem.src = imageSrc;
    this._popupImageItem.alt = cardTitle;
    this._popupImageCaption.textContent = cardTitle;
    super.open();
  }
}
