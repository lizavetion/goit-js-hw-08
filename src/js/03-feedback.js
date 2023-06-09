import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

populateFeedback();
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData, 500));

function onFormSubmit(event){
  event.preventDefault();
  const {email, message} = event.currentTarget.elements;
  const emailMsg = `Email: ${email.value}, Message: ${message.value}`
  console.log(emailMsg);
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function onInputData(event){
  let data = localStorage.getItem(STORAGE_KEY);
  data = data ? JSON.parse(data) : {};
  let {email, message} = form.elements;
  data = {
    email: email.value,
    message: message.value,
  };


  data[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  console.log(data);
}

function populateFeedback() {
  let data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    data = JSON.parse(data);
    Object.entries(data).forEach(([name, value]) => {
      form.elements[name].value = value ?? '';
    })
  }

}