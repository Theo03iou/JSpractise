const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields'

        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} :
        ${emailInput.value}`))
        userList.appendChild(li);

        // Clear Fields
        nameInput.value = "";
        emailInput.value = "";
    }
}













// const btn = document.querySelector('.btn')


// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.toggle('bg-dark');
//     document.querySelector('.items').firstElementChild.innerHTML = '<h1>IM BLACK NOW</h1>'
// })




// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "POOP";
// ul.children[1].innerText = "esfsfseg";
// ul.lastElementChild.innerHTML = '<h1>jfesiohjnseoif</h1>';



// const btn = document.querySelector('.btn')
// btn.style.background = 'red'




// let items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));


// Single element
// document.getElementById('my-form')
// document.querySelector('h1')

// Multiple element

// console.log(document.querySelectorAll('.item'));