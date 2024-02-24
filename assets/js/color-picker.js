/**
 * color theme setting
 */

function storeTheme(theme) {
  localStorage.setItem("theme", theme)
}

function retrieveTheme() {
  const activeTheme = localStorage.getItem("theme")
  if (activeTheme === null) {
    return
  }

  colorThemes.forEach((el) => (el.checked = el.id === activeTheme))
}

const colorThemes = document.querySelectorAll('[name="theme"]')

colorThemes.forEach((el) =>
  el.addEventListener("click", () => {
    storeTheme(el.id)
  })
)

retrieveTheme()
