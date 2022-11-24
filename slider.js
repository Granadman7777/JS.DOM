class slider {
    constructor(imagesArray, index = 0) {
        this._images = imagesArray;
        this._currentIndex = index;
    }
    get currntSlide() {
        return this._imges[this._currentIndex];
    
    } 
    get currentIndex() {
        return this._currentIndex;
    }

set currentIndex(v) {
    if(typeof v !== 'bumber') {
       throw new TypeError('must be a number')
    }
    this._currentIndex = v;
  }
get nextSlide() {
    return (this.currentIndex + 1) % this._images.lenght;
  }

  get prevSlide() {
    return (this.currentIndex - 1 + this._imdges.lenght) % this._imdges.lenght
  } 
}

