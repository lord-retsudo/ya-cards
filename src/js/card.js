export default class Card {
    constructor () {
    }

    like (event) {
        event.target.classList.toggle('place-card__like-icon_liked');
    }

    remove (event, cardlist) {
        cardlist.removeChild(event.target.closest('.place-card'));
    }

    create (name, link) {
  
      const placeCard = document.createElement('div');
      const placeCardImage = document.createElement('div');
      const placeCardDeleteIcon = document.createElement('button');
      const placeCardDescription = document.createElement('div');
      const placeCardName = document.createElement('h3');
      const placeCardLikeIcon = document.createElement('button');

      placeCard.classList.add('place-card');
      placeCardImage.classList.add('place-card__image');
      placeCardImage.style.backgroundImage = `url('${link}')`;
      placeCardDeleteIcon.classList.add('place-card__delete-icon');
      placeCardDescription.classList.add('place-card__description');
      placeCardName.classList.add('place-card__name');
      placeCardName.textContent = name;
      placeCardLikeIcon.classList.add('place-card__like-icon');

      placeCard.appendChild(placeCardImage);
      placeCardImage.appendChild(placeCardDeleteIcon);
      placeCard.appendChild(placeCardDescription);
      placeCardDescription.appendChild(placeCardName);
      placeCardDescription.appendChild(placeCardLikeIcon);

      return  placeCard;
    }

  }
