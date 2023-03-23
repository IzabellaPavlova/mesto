export default class Card {
  constructor(data, cardTemplateSelector, cardSelectors, handleCardClick) {
    this._imageSrc = data.link;
    this._cardTitle = data.name;
    this._cardTemplateSelector = cardTemplateSelector;
    this._cardSelectors = cardSelectors;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content
      .querySelector(this._cardSelectors.elementSelector)
      .cloneNode(true);
    return cardElement
  }

  _fillInfo = () => {
    this._element.querySelector(this._cardSelectors.titleSelector).textContent = this._cardTitle;
    const cardImage = this._element.querySelector(this._cardSelectors.imageSelector);
    cardImage.src = this._imageSrc;
    cardImage.alt = this._cardTitle;
  }

  _handleLikeClick = (evt) => {
    evt.target.classList.toggle(this._cardSelectors.activeLikeButtonClass);
  }

  _handleDeleteClick = () => {
    this._element.remove();
    this._element = null;
  }

  _setEventListemers = () => {
    this._element.querySelector(this._cardSelectors.deleteButtonSelector).addEventListener('click', () => {
      this._handleDeleteClick();
    });
    this._element.querySelector(this._cardSelectors.likeButtonSelector).addEventListener('click', (evt) => {
      this._handleLikeClick(evt);
    })
    this._element.querySelector(this._cardSelectors.imageSelector).addEventListener('click', () => {
      this._handleCardClick(this._imageSrc, this._cardTitle);
    })
  }

  generateCard = () => {
    this._element = this._getTemplate();
    this._fillInfo();
    this._setEventListemers();
    return this._element;
  }
}
