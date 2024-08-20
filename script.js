function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector(".profile-2 img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light-1.png")
  } else {
    img.setAttribute("src", "./assets/avatar (1).png")
  }
}
