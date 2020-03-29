import "./style.css"

import Api from './js/api.js'
import Card from "./js/card.js"
import PopupImage from './js/popupimage.js'
import CardList from "./js/cardlist.js"
import FormValidator from './js/formvalidator.js'
import UserInfo from './js/userinfo.js'
import Popup from './js/popup.js'
import PopupProfile from './js/popupprofile.js'

(function () {

  const root = document.querySelector('.root');
  const placesList = document.querySelector('.places-list');

  const popupParams = {
    popup: root.querySelector('.popup'),
    openPopupButton: document.querySelector('.user-info__button'),
    savePopupButton: document.querySelector('.popup__button'),
    formCard: document.forms.new,
    closePopupButton: document.querySelector('.popup__close'),
    errorDesc: document.querySelector("#error-name"),
    errorLink: document.querySelector("#error-link")
  }

  const popupImageParams = {
    popupImage: document.querySelector('.popup__image'),
    closePopupImageButton: document.querySelector('.popup__close_image'),
    imageBig: document.querySelector('.popup__big-image'),
  }

  const popupProfileParams = {
    popupProfile: root.querySelector('.popup__profile'),
    formProfile: document.forms.profile,
    openPopupProfileButton: document.querySelector('.user-info__button-edit'),
    closePopupProfileButton: document.querySelector('.popup__close_profile'),
    savePopupProfileButton: document.querySelector('.popup__profile-button'),
    errorName: document.querySelector("#error-profile-name"),
    errorAbout: document.querySelector("#error-about")
  }

  const userInfoParams = {
    userName: document.querySelector('.user-info__name'),
    userAbout: document.querySelector('.user-info__job'),
    userAvatar: document.querySelector('.user-info__photo'),
    userInfoForm: document.forms.profile
  }

  const popupImage = new PopupImage(popupImageParams);
  popupImage.setListeners();

  const serverUrl = process.env.NODE_ENV === 'development' ? 'http://praktikum.tk/cohort8' : 'https://praktikum.tk/cohort8';

  const api = new Api({
    baseUrl: serverUrl, 
    headers: {      
      authorization: '3a29d4af-5c13-4fe8-ae79-6f88e9b7cc60',
      'Content-Type': 'application/json'
    }
  });

  const objectUserInfo = new UserInfo(userInfoParams);

  api.getUserInfo()
    .then((result) => {
      objectUserInfo.initUserInfo(result);
    })
    .catch((err) => {
      console.log('ошибка передачи данных с сервера: ' + err);
    });

  const cardList = new CardList(placesList, popupImage);

  api.getInitialCards()
    .then((result) => {
      cardList.render(result);
    })
    .catch((err) => {
      console.log('ошибка передачи данных с сервера: ' + err);
    });

  const popupCard = new Card();
  const popupValidator = new FormValidator(document.forms.new);

  const popup = new Popup(cardList, popupCard, popupValidator, popupParams, api);
  popup.setListeners();

  const popupProfileValidator = new FormValidator(document.forms.profile);

  const popupProfile = new PopupProfile(popupProfileValidator, objectUserInfo, popupProfileParams, api);
  popupProfile.setListeners();

})();
