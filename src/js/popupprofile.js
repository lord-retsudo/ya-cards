export default class PopupProfile {
  constructor(validator, objectUserInfo, popupProfileParams, api) {

    this.popupProfile = popupProfileParams.popupProfile;
    this.formProfile = popupProfileParams.formProfile;
    this.openPopupProfileButton = popupProfileParams.openPopupProfileButton;
    this.closePopupProfileButton = popupProfileParams.closePopupProfileButton;
    this.savePopupProfileButton = popupProfileParams.savePopupProfileButton;
    this.errorName = popupProfileParams.errorName;
    this.errorAbout = popupProfileParams.errorAbout;

    this.validator = validator;
    this.validator.setEventListeners(true);

    this.userInfo = objectUserInfo;
    this.api = api;
  }

  setListeners() {
    // Можно лучше
    // обработчки событий лучше сделать отдельными методами класса
    // а в этой функции лишь назначать их событиям, так проще читать код
    // и понимать его структуру. Назначать лучше через стрелочные функции.
    // Аналогично лучше исправить на будущее и в других классах.
    this.openPopupProfileButton.addEventListener('click', function () {

      this.open();
      this.userInfo.setUserInfo();
      this.validator.setSubmitButtonState(this.savePopupProfileButton, true);
    }.bind(this));

    this.closePopupProfileButton.addEventListener('click', function () {

      this.formProfile.reset();
      this.close();
      this.validator.resetError(this.errorName);
      this.validator.resetError(this.errorAbout);
    }.bind(this));

    this.formProfile.addEventListener('submit', function (event) {
      event.preventDefault();

      this.api.sendUserInfo(this.formProfile.elements.name.value, this.formProfile.elements.about.value)
        .then((result) => {
          this.userInfo.updateUserInfo(result);
          this.formProfile.reset();
          this.close();
        })
        .catch((err) => {
          console.log('ошибка передачи данных на сервер: ' + err);
        });

    }.bind(this));
  }

  open() {
    this.popupProfile.classList.add('popup_is-opened');
  }

  close() {
    this.popupProfile.classList.remove('popup_is-opened');
  }

}