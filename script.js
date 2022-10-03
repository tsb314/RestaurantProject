let header = document.querySelector('.navbar');
let navbtn = document.querySelector('#nav-btn');
let navbar = document.querySelector('.nav-options');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});
navbtn.onclick = () => {
    navbar.classList.toggle('active');
};

navbar.onclick = () => {
    navbar.classList.toggle('active');
}
