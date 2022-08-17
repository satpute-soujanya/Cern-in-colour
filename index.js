const backgroundColor = document.getElementById('background')
const textColor = document.getElementById('text')
const linkColor = document.getElementById('link')
// console.log(linkColor)

const colorTheme = {
  background: '',
  text: '',
  link: '',
}
function saveTolocalStorage(object) {
  window.localStorage.setItem('colorTheme', JSON.stringify(object))
}
function changeBackground(e) {
  colorTheme.background = e.target.value
  saveTolocalStorage(colorTheme)
}
function changeTextColor(e) {
  colorTheme.text = e.target.value
  saveTolocalStorage(colorTheme)
}
function changeLinkColor(e) {
  colorTheme.link = e.target.value
  saveTolocalStorage(colorTheme)
}

backgroundColor.addEventListener('change', changeBackground)
textColor.addEventListener('change', changeTextColor)
linkColor.addEventListener('change', changeLinkColor)

console.log('hello')
