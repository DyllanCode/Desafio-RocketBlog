const mobileNavBar = document.querySelector('.mobileMenu');
const ul = document.querySelector('ul')

mobileNavBar.addEventListener('click', addClass);
function addClass(){
  if (ul.classList.contains("active") && mobileNavBar.classList.contains("active")) {
    ul.classList.remove("active")
    mobileNavBar.classList.remove("active")
  } else {
    ul.classList.add("active")
    mobileNavBar.classList.add("active")
  }
}