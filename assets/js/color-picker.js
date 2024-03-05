/**
 * color theme setting
 */
const colorScheme = document.getElementById("colorscheme")

function storeTheme(theme) {
  localStorage.setItem("theme", theme)
}

function retrieveTheme() {
  const activeTheme = localStorage.getItem("theme")
  if (activeTheme === null) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      colorScheme.checked = true
    } else {
      colorScheme.checked = false
    }
    return
  }

  colorScheme.checked = activeTheme === "dark"
}

colorScheme.addEventListener("change", () => {
  storeTheme(colorScheme.checked ? "dark" : "light")
})

retrieveTheme()
