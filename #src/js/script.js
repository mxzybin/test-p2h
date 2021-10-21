/*MENU*/ 
let menuBtn = document.getElementById('menu-button');
let menu = document.querySelector('.header__nav');
let backgroundMenu = document.querySelector('.header__background');

menuBtn.addEventListener('click', toggleMenu);
backgroundMenu.addEventListener('click', closeMenu);
function closeMenu(event) {
    menuBtn.classList.remove('active');
    document.body.classList.remove('lock');
    menu.classList.remove('active');
    backgroundMenu.classList.remove('active');
}
function toggleMenu(event) {
    event.preventDefault();
    menuBtn.classList.toggle('active');
    document.body.classList.toggle('lock');
    menu.classList.toggle('active');
    backgroundMenu.classList.toggle('active');
}
/*POPUP*/
let modalButtons = document.querySelectorAll('.modal1');
let popup = document.querySelector('.popup');
let popupBack = document.querySelector('.popup__back');
let popupClose = document.querySelector('.popup-close');

popupBack.addEventListener('click', closeModal);
popupClose.addEventListener('click', closeModal);


modalButtons.forEach(modalButton => {
    modalButton.addEventListener('click', openModal);
    function openModal(event) {
        event.preventDefault();
        popup.classList.add('active');
        popupBack.classList.add('active');
        document.body.classList.add('lock');

    }
});

function closeModal(event) {
    event.preventDefault();
    popup.classList.remove('active');
    popupBack.classList.remove('active');
    document.body.classList.remove('lock');

}

/*LOADING VIDEO BY CLICK*/
let area = document.querySelector('.popup__video');
let preview = document.getElementById('play-video');

preview.addEventListener('click', swapVideo);

function swapVideo(event) {
    event.preventDefault();
    let videoSource = preview.getAttribute('data-video');
    console.log(videoSource);

    preview.remove();
    let videoFrame = document.createElement('iframe');
    videoFrame.setAttribute('src', videoSource + '?autoplay=1')
    area.appendChild(videoFrame);
}