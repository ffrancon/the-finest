const bookGuests = document.getElementById('book-guests');
const bookGuestsInc = document.getElementById('book-ginc');
const bookGuestsDec = document.getElementById('book-gdec');
const bookDate = document.getElementById('book-date');
const bookHour = document.getElementById('book-hour');
const bookName = document.getElementById('book-name');
const bookPhone = document.getElementById('book-phone');
const bookEvents = document.getElementById('book-events');
const bookSubmit = document.getElementById('book-submit');
const bookFormConfirm = document.getElementById('form-book-confirm');
const bookFormErrorEmpty = document.getElementById('form-book-error-empty');
const bookFormErrorPhone = document.getElementById('form-book-error-phone');
const contactName = document.getElementById('contact-name');
const contactMail = document.getElementById('contact-mail');
const contactMessage = document.getElementById('contact-message');
const contactSubmit = document.getElementById('contact-submit');
const contactFormConfirm = document.getElementById('form-contact-confirm');
const contactFormErrorEmpty = document.getElementById('form-contact-error-empty');
const contactFormErrorMail = document.getElementById('form-contact-error-mail');

const disableHourDate = () => {
  bookDate.disabled = true;
  bookHour.disabled = true;
  bookDate.classList.add('form-book__input--disabled');
  bookHour.classList.add('form-book__input--disabled');
};

const enableHourDate = () => {
  bookDate.disabled = false;
  bookHour.disabled = false;
  bookDate.classList.remove('form-book__input--disabled');
  bookHour.classList.remove('form-book__input--disabled');
};

//-- Auto-sélection d'un champ évènement quand on arrive sur la page en, cliquant sur un bouton Book depuis la page Events
const eventItem = sessionStorage.getItem('event');
if (eventItem) {
  document.getElementById(eventItem).selected = true;
  disableHourDate();
  sessionStorage.removeItem('event');
  document.getElementById('form-book').classList.add('form-book--glow');
}
else {
  document.getElementById('opt-none').selected = true;
}

//-- Champ guests avec boutons incrémenter/decrémenter
bookGuests.value = 1;

if (parseInt(bookGuests.value) === 1){
  bookGuestsDec.style.color = '#ccc';
}
if (parseInt(bookGuests.value) === 8){
  bookGuestsInc.style.color = '#ccc';
}

bookGuestsInc.addEventListener('click', () => {
  if (parseInt(bookGuests.value) === 7){
    bookGuestsInc.style.color = '#ccc';

  }
  if (bookGuests.value < 8) {
    bookGuests.value++;
    bookGuestsDec.style.color = '#252525';
  }
});

bookGuestsDec.addEventListener('click', () => {
  if (parseInt(bookGuests.value) === 2){
    bookGuestsDec.style.color = '#ccc';
  }
  if (parseInt(bookGuests.value) > 1) {
    bookGuests.value--;
    bookGuestsInc.style.color = '#252525';
  }
});

//-- Désactivation des champs Date et Hour quand un évenement est sélectionné
bookEvents.addEventListener('change', () => {
  if (bookEvents.value != 'None') {
    disableHourDate();
  }
  else {
    enableHourDate();
  }
})

//-- Validation du formulaire de réservation
const numRegex = /^\d{7,12}$/;

bookSubmit.addEventListener('click', e => {
  e.preventDefault();
  if ((!bookDate.value && !bookDate.disabled)|| !bookName.value || !bookPhone.value) { // Champs vides
    bookFormConfirm.style.display = 'none';
    bookFormErrorPhone.style.display = 'none'
    bookFormErrorEmpty.style.display = 'block';
  }
  else if (!numRegex.test(bookPhone.value)){ // Téléphone au mauvais format
    bookFormConfirm.style.display = 'none';
    bookFormErrorEmpty.style.display = 'none'
    bookFormErrorPhone.style.display = 'block';
  }
  else {
    if (Date.parse(bookDate.value+bookHour.value) < Date.now() + 86400000 && !bookHour.disabled) { // Date invalide (réservation 24h avant)
      window.alert('Please choose a valid date (at least 24hrs in advance)');
    }
    else {
      console.log('ok');
      bookFormErrorEmpty.style.display = 'none';
      bookFormErrorPhone.style.display = 'none';
      bookFormConfirm.style.display = 'block';
    }
  }
});

//-- Validation du formulaire de contact
const mailRegex = /^\w+\.{0,1}\w+@\w*[a-zA-Z]+\w+\.[a-zA-Z]+$/; // Format mail (ex: toto1.tata@mail1.com)

contactSubmit.addEventListener('click', e => {
  e.preventDefault();
  if (!contactName.value || !contactMail.value || !contactMessage.value) {
    contactFormConfirm.style.display = 'none';
    contactFormErrorMail.style.display = 'none'
    contactFormErrorEmpty.style.display = 'block';
  }
  else if (!mailRegex.test(contactMail.value)) {
    contactFormConfirm.style.display = 'none';
    contactFormErrorMail.style.display = 'block'
    contactFormErrorEmpty.style.display = 'none';
  }
  else {
    contactFormConfirm.style.display = 'block';
    contactFormErrorMail.style.display = 'none'
    contactFormErrorEmpty.style.display = 'none';
  }
})