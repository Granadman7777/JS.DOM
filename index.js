const imageDB = [
    './Images\6uGglXbkoV.jpg', 
    './Images\69044-priroda-okean-more-gorizont-maldivy-1080x1920.jpg',
    './Images\a04bceb813204342.jpg',
    './Images\images.jpg',
    './Images\U9q4vaJD.jpg'
]
 
const [prevBtn, nextBtn] = document.querySelectorAll('.btn');
const img = document.querySelector('.slide-img');

const slider = new Slider(imageDB);

function updateView() {
    img.setAttribute('src', slider.currentSlide)
}

const createSlideBtnHandler = (direction = 'next') => {
    return function () {
        slider.currentIndex = slifer[direction === 'next' ? 'nextSlide' : 'prevSlide'];
        updateView();
    }
}

prevBtn.addEventListener('click', createSlideBtnHandler('prev'));
nextBtn.addEventListener('click', createSlideBtnHandler('next'));

updateView();