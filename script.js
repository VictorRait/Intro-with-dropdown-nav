use = "strict"
const menu = document.querySelectorAll(".head-list")
const hamburger = document.querySelector(".hamburger-menu")
const primary = document.querySelector(".primary")
const overlay = document.querySelector(".overlay")
const closeBtn = document.querySelector(".close-btn")
const mobileMenu = document.querySelectorAll(".overlay-content .head-list")

menu.forEach((button) => {
  button.addEventListener("click", () => {
    const subMenu = button.querySelector(".sub-menu")
    const icon = button.querySelector(".head-list img")
    subMenu.classList.toggle("hidden")
    if (subMenu.classList.contains("hidden")) {
      icon.src = "./images/icon-arrow-down.svg"
    } else {
      icon.src = "./images/icon-arrow-up.svg"
    }
  })
})
mobileMenu.forEach((button) => {
  button.addEventListener("click", () => {
    const subMenu = button.querySelector(".sub-menu-mobile")
    const icon = button.querySelector(".head-list img")
    subMenu.classList.toggle("hidden")
    if (subMenu.classList.contains("hidden")) {
      icon.src = "./images/icon-arrow-down.svg"
    } else {
      icon.src = "./images/icon-arrow-up.svg"
    }
  })
})

hamburger.addEventListener("click", () => {
  const subMenu = document.querySelector(".sub-menu")

  const navRight = document.querySelector(".nav-right")
  overlay.classList.toggle("hidden")
  primary.classList.toggle("hidden")
  console.log("alert")
})
closeBtn.addEventListener("click", () => {
  if (!overlay.classList.contains("hidden")) {
    overlay.classList.add("hidden")
    primary.classList.add("hidden")
  }
})
