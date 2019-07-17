const burger = document.getElementsByClassName('burger')[0]
const aside  = document.getElementsByTagName('aside')[0]
console.log(aside)
burger.addEventListener('click',(event)=>{
    burger.children[0].classList.toggle('burger__line--active')
    aside.classList.toggle('aside--active')
})