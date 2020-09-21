const firstBtn = document.getElementById('btn-event1');
const secondBtn = document.getElementById('btn-event2');
const thirdBtn = document.getElementById('btn-event3');
const fourthBtn = document.getElementById('btn-event4');

//-- Sélection d'un évènement et redirection vers la page de réservation avec l'évènement choisi sélectionné automatiquement (voir book.js)
firstBtn.addEventListener('click', e => {
  e.preventDefault();
  sessionStorage.setItem('event', 'opt-event1');
  window.location.href = './book.html#form-book-ct';
});

secondBtn.addEventListener('click', e => {
  e.preventDefault();
  sessionStorage.setItem('event', 'opt-event2');
  window.location.href = './book.html#form-book-ct';
});

thirdBtn.addEventListener('click', e => {
  e.preventDefault();
  sessionStorage.setItem('event', 'opt-event3');
  window.location.href = './book.html#form-book-ct';
});

fourthBtn.addEventListener('click', e => {
  e.preventDefault();
  sessionStorage.setItem('event', 'opt-event4');
  window.location.href = './book.html#form-book-ct';
});