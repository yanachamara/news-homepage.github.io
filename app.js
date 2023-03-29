const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

// when nav-link is clicked, the nav bar goes away 
document.querySelectorAll('.nav-links').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
}));


/* THIS WAS FROM ED DEV VIDEOS AND DIDNT WORK
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle(".active");
  });
};

navSlide();
*/
