export default class Card {
  constructor({ data, cardTemplateSelector, cardSelectors, userId, handleCardClick, handleLikeClick, handleDeleteClick }) {
    this._id = data._id;
    this._userId = userId;
    this._isUserCard = userId === data.owner._id;
    this._imageSrc = data.link;
    this._title = data.name;
    this._likes = data.likes;
    this._templateSelector = cardTemplateSelector;
    this._cardSelectors = cardSelectors;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(this._cardSelectors.elementSelector)
      .cloneNode(true);
    return cardElement
  }

  _fillInfo = () => {
    this._element.querySelector(this._cardSelectors.titleSelector).textContent = this._title;
    this._cardImage.src = this._imageSrc;
    this._cardImage.alt = this._title;
    this._likeCounterElement.textContent = this._likes.length;
  }

  handleDeleteClick = () => {
    this._element.remove();
    this._element = null;
  }

  _isLikedbyUser() {
    return this._likes.some((item) => item._id === this._userId);
  }

  _toggleLikeState() {
    if (this._isLikedbyUser()) {
      this.addLike();
    } else {
      this.removeLike();
    }
  }

  _setEventListemers = () => {
    if (this._isUserCard) {
      this._element.querySelector(this._cardSelectors.deleteButtonSelector).addEventListener('click', () => {
        this._handleDeleteClick();
      });
    }
    this._likeButton.addEventListener('click', (evt) => {
      this._handleLikeClick(evt);
    })
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._imageSrc, this._title);
    })
  }

  addLike() {
    this._likeButton.classList.add(this._cardSelectors.activeLikeButtonClass);
    this.isLiked = true;
  }

  removeLike() {
    this._likeButton.classList.remove(this._cardSelectors.activeLikeButtonClass);
    this.isLiked = false;
  }

  getCardId() {
    return this._id;
  }

  updateLikeCounter(likes) {
    this._likeCounterElement.textContent = likes.length;
  }

  generateCard = () => {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(this._cardSelectors.likeButtonSelector);
    this._likeCounterElement = this._element.querySelector(this._cardSelectors.likeCounterSelector);
    this._cardImage = this._element.querySelector(this._cardSelectors.imageSelector);
    if (!this._isUserCard) {
      this._element.querySelector(this._cardSelectors.deleteButtonSelector).remove();
    }
    this._fillInfo();
    this._toggleLikeState();
    this._setEventListemers();
    return this._element;
  }
}
