const backgroundColor = document.getElementById('background')
const textColor = document.getElementById('text')
const linkColor = document.getElementById('link')
// console.log(linkColor)
var colorTheme = {
  background: '#49008d',
  text: '#FFAA0C',
  link: '#F0F0F0',
}
function saveTolocalStorage() {
  window.localStorage.setItem('colorTheme', JSON.stringify(colorTheme))
  // console.log('from saving', colorTheme)
}
function setInputStyle() {
  backgroundColor.value = colorTheme.background
  textColor.value = colorTheme.text
  linkColor.value = colorTheme.link
}
function getBackgroundColor(e) {
  colorTheme.background = e.target.value
  saveTolocalStorage()
}
function getTextColor(e) {
  colorTheme.text = e.target.value
  saveTolocalStorage()
}
function getLinkColor(e) {
  colorTheme.link = e.target.value
  saveTolocalStorage()
}
function getColorFromLocalStorage() {
  colorTheme = JSON.parse(window.localStorage.getItem('colorTheme'))
  setInputStyle()
  // console.log('from storage', colorTheme)
}
saveTolocalStorage()
getColorFromLocalStorage()
backgroundColor.addEventListener('change', getBackgroundColor)
textColor.addEventListener('change', getTextColor)
linkColor.addEventListener('change', getLinkColor)
