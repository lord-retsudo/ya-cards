export default class PopupImage {
    constructor (popupImageParams) {
        
        this.popupImage = popupImageParams.popupImage;
        this.closePopupImageButton = popupImageParams.closePopupImageButton;
        this.imageBig = popupImageParams.imageBig;         
    }

    setListeners(){
        this.closePopupImageButton.addEventListener('click', function(){   
            this.close();
          }.bind(this));
    }

    open(image){   
        this.imageBig.src = image.style.backgroundImage.slice(4, -1).replace(/"/g, "");  
        this.popupImage.classList.add('popup_is-opened');        
    }
    
    close(){
        this.popupImage.classList.remove('popup_is-opened'); 
    }   
}
