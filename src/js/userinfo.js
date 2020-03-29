export default class UserInfo {
  // Можно лучше -- используйте деструктуризацию

  //Я попробовал, почему-то не получается у меня деструктуризация. Т.е. запись constructor ({userName, userAbout, userAvatar, userInfoForm}) {
  //не создает инициализированные переменные подобно this.userName. Может именно для конструкторов классов есть какая-то особенность? Чего то я не понимаю, и гугл не помог. :(

  // Деструктуризация не создает this.parameter, они принимает parameter, а потом надо this.parameter = parameter
  // Плюс передачи объекта в параметры и деструктуризации на приеме в том что вы больше не заботитесь о
  // порядке следования параметров и не контролируете их количество, берете только то что нужно.
  constructor(userInfoParams) {
    this.userName = userInfoParams.userName;
    this.userAbout = userInfoParams.userAbout;
    this.userAvatar = userInfoParams.userAvatar;
    this.userInfoForm = userInfoParams.userInfoForm;
    this.name = '';
    this.about = '';
    this.avatar = '';
  };

  initUserInfo(objectUser) {
    this.userAvatar.style.backgroundImage = `url('${objectUser.avatar}')`;
    this.name = objectUser.name;
    this.about = objectUser.about;
    this.userName.textContent = this.name;
    this.userAbout.textContent = this.about;
  }

  setUserInfo() {
    this.userName.textContent = this.name;
    this.userAbout.textContent = this.about;
    this.userInfoForm.elements.name.value = this.userName.textContent;
    this.userInfoForm.elements.about.value = this.userAbout.textContent;
  }
  // По идее этот метод отвечает за визуальную часть -- данные на странице и в форме? а setUserInfo -- за сохранение
  // данных внутри объекта класса

  // Да, в задании так написано. Я долго думал, как же это сделать? Как можно одной и той же функцией отобразить данные
  // на странице (после сабмита формы или получения данных с сервера)
  // и одно временно этой же функцией отображать данные при открытии формы в полях формы? Запутался.
  // По-моему, у нас есть два процесса:
  // 1) Получение текущих данных пользователя (из класса) для отображения их на странице и в открывающейся форме редактирования профиля.
  // 2) Изменение данных пользователя для сохранения их в классе (отправки на сервер и получения подтверждения) и отображения на странице.
  // Мне кажется логичным сделать две фукнции и реализовать эти два процесса в этих двух функциях.

  // У вас отличие updateUserInfo от initUserInfo исключительно в порядке строк и установке картинки аватара.
  // Если предположить что вы реализовали функционал смены аватара, то вам становятся не нужны два метода, вам нужен один
  // this.avatar -- вы вообще не используте, хотя в нее надо получить аватар и хранить в ней же.
  // вообще работу с аватаром лучше в отделный метод вынести, т.к, он меняется отдельно от текстовых данных пользователя.
  // Для работы с текстовыми параметрами юзера вам одного метода хватит, не стоит дублировать их
  updateUserInfo(objectUser) {
    this.userName.textContent = objectUser.name;
    this.userAbout.textContent = objectUser.about;
    this.name = objectUser.name;
    this.about = objectUser.about;
  }
}

