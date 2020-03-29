import Card from './card.js';

export default class CardList extends Card {
    constructor (container, popupImage) {
        super();
        this.container = container;       
        this.popupImage = popupImage;        
    }

    addCard (card){

        this.container.appendChild(card).addEventListener('click', function(event){

            if (event.target.classList.contains('place-card__like-icon')) this.like(event);
            else if (event.target.className === 'place-card__delete-icon') this.remove(event, this.container);
            else if (event.target.className === 'place-card__image') this.popupImage.open(event.target);
        }.bind(this));
    }

    render (initialCards){      

        initialCards.forEach(function(item){      
            this.addCard(this.create(item.name, item.link));
          }.bind(this));
    }
}

