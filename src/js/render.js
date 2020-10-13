import refs from './refs.js'
// import fetch from './fetch.js'
// import template from './../template/template.hbs'
// import debounce from 'lodash.debounce'

// refs.input.addEventListener('input', debounce((e)=>{
//   fetch.search = e.target.value
//   fetch.getFetch().then(data  => renderItems(data.drinks))
// },1000));

// function renderItems (data) {
//   const drink = template(data)
//   refs.list.insertAdjacentHTML('beforeend', drink)
//   const nullLists = document.querySelectorAll('.ingredients li')
//   console.log(nullLists);
//   nullLists.forEach(el=> {
//     if(el.textContent === "") {
//       el.style.display = 'none'
//     }
//   })
// }


//==============================================================

refs.singUpForm.addEventListener('submit', e =>{
  e.preventDefault()
  console.log(e.currentTarget.elements.login.value);
  console.log(e.currentTarget.elements.password.value);
  let login = e.currentTarget.elements.login.value;
  let password = e.currentTarget.elements.password.value;
  localStorage.setItem('login', login)
  localStorage.setItem('password', password)
})