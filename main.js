let hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector("#nav_menu")
const navLinks = document.querySelectorAll(".nav-links")
const menuList = document.querySelector("#menu_list")
const dropDown = document.querySelector("#dropdown")
const menuItems = document.querySelectorAll("#menu_items")
console.log(
    menuItems
)


console.log(menuItems, menuList, dropDown)
hamburger.addEventListener("click", ()=>{
        navMenu.classList.toggle('opacity-100');
        navMenu.classList.toggle('invisible');
        navMenu.classList.toggle('translate-x-[-100%]');
        hamburger.classList.toggle('ri-close-large-line')
})


navLinks.forEach(link=> link.addEventListener("click", ()=>{
        navMenu.classList.toggle('opacity-100');
        navMenu.classList.toggle('invisible');
        navMenu.classList.toggle('translate-x-[-100%]');
        hamburger.classList.toggle('ri-close-large-line')
}))

//dropdown menu
dropDown.addEventListener("click", ()=>{
        menuList.classList.toggle('opacity-100');
        menuList.classList.toggle('invisible');
        menuList.classList.toggle('translate-y-[-100%]')

        
})

menuItems.forEach(item=> item.addEventListener("click", ()=>{
        menuList.classList.toggle('opacity-100');
        menuList.classList.toggle('invisible');
        menuList.classList.toggle('translate-y-[-100%]')
}))
