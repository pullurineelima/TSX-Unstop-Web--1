function showSection(Id){
  document.querySelectorAll('.section');
  .forEach(sec=>sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}


const form =document.getElementById('contact-form');
const msg =document.getElementById('form-msg');
form.addEventListener('submit',e=>{
  e.preventDefault();
  msg.textContent = "Thank you! I'll get back to you soon.";
  form.requestFullscreen();
})