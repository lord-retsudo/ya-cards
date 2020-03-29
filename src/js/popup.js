export default class Popup {
  constructor(cardList, cardObject, validator, popupParams, api) {

    this.cardList = cardList;
    this.newCard = cardObject;

    this.popup = popupParams.popup;
    this.openPopupButton = popupParams.openPopupButton;
    this.savePopupButton = popupParams.savePopupButton;
    this.formCard = popupParams.formCard;
    this.closePopupButton = popupParams.closePopupButton;
    this.errorDesc = popupParams.errorDesc;
    this.errorLink = popupParams.errorLink;
    this.api = api;

    this.validator = validator;
  }

  setListeners() {
    this.validator.setEventListeners(false);

    this.openPopupButton.addEventListener('click', function () {
      this.open();
      this.validator.setSubmitButtonState(this.savePopupButton, false);
    }.bind(this));

    this.closePopupButton.addEventListener('click', function () {
      this.formCard.reset();
      this.close();
      this.validator.resetError(this.errorDesc);
      this.validator.resetError(this.errorLink);
    }.bind(this));

    this.formCard.addEventListener('submit', function (event) {

      event.preventDefault();

      this.api.sendCard(this.formCard.elements.name.value, this.formCard.elements.link.value)
        .then((result) => {
          //console.log(result);
          this.cardList.addCard(this.newCard.create(result.name, result.link));
          this.formCard.reset();
          this.close();
        })
        .catch((err) => {
          console.log('ошибка передачи данных на сервер: ' + err);
        });

    }.bind(this));
  }

  open() {
    this.popup.classList.add('popup_is-opened');
  }

  close() {
    this.popup.classList.remove('popup_is-opened');
  }
}
