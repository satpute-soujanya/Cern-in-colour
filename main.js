const body = document.getElementsByTagName('body')[0]
const anchor = document.getElementsByTagName('a')

var colorTheme = {
  background: '#49008df0',
  text: '#FFAA0C',
  link: '#F0F0F0',
}
function setCSS() {
  console.log('from setting ', colorTheme)
  body.style.backgroundColor = colorTheme.background
  body.style.color = colorTheme.text
  for (a of anchor) {
    a.style.color = colorTheme.link
  }
}

function getITemfromLocalStorage() {
  colorTheme = JSON.parse(window.localStorage.getItem('colorTheme'))
  //   console.log('from main.js', colorTheme)
  window.addEventListener('storage', () => {
    colorTheme = JSON.parse(window.localStorage.getItem('colorTheme'))
    // console.log('from main.js', colorTheme)
    setCSS()
  })
}

getITemfromLocalStorage()
setCSS()
