// create variable and select class
const modalButton = document.querySelector('.jsModalButton');
const modalCloseButton = document.querySelector('.jsModalClose');
const modalOverlay = document.querySelector('.modal-overlay');


// add event listener
modalButton.addEventListener('click', event => {
  //add class
  document.body.classList.add('modal-is-open')
});


modalCloseButton.addEventListener('click', event => {
  // remove class
  document.body.classList.remove('modal-is-open')
});

// remove class
modalOverlay.addEventListener('click', event => {
  if (!event.target.closest('.modal')) {

    document.body.classList.remove('modal-is-open')
  }
});