const contentElement = document.querySelector('.content');
const paragraphElement = document.querySelectorAll('.paragraph')

const setBackgroundColor  = (color) => {
  contentElement.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
};

const colorBackgroundLists = document.querySelectorAll('#background-color>button');
  for (let index = 0; index < colorBackgroundLists.length; index += 1) {
    colorBackgroundLists[index].addEventListener('click', (event) => {
      setBackgroundColor(event.target.innerText);
    })
  }

const setFontColor = (color) => {
  for (let index = 0; index < paragraphElement.length; index += 1) {
    paragraphElement[index].style.color = color; 
  }
  localStorage.setItem('fontColor', color);
};

const colorFontLists = document.querySelectorAll('#font-color>button');
for (let index = 0; index < colorFontLists.length; index += 1) {
  colorFontLists[index].addEventListener('click', (event) => {
    setFontColor(event.target.innerText);
  })
}

const setFontSize = (size) => {
  for (let index = 0; index < paragraphElement.length; index += 1) {
    paragraphElement[index].style.fontSize = size; 
  }
  localStorage.setItem('fontSize', size);
};

const fontSizeLists = document.querySelectorAll('#font-size>button');
for (let index = 0; index < fontSizeLists.length; index += 1) {
  fontSizeLists[index].addEventListener('click', (event) => {
    setFontSize(event.target.innerText);
  })
}

const setLineHeight = (height) => {
  for (let index = 0; index < paragraphElement.length; index += 1) {
    paragraphElement[index].style.lineHeight = height; 
  }
  localStorage.setItem('lineHeight', height);
};

const lineHeightLists = document.querySelectorAll('#line-height>button');
for (let index = 0; index < lineHeightLists.length; index += 1) {
  lineHeightLists[index].addEventListener('click', (event) => {
    setLineHeight(event.target.innerText);
  })
}

const setfontFamily = (font) => {
  for (let index = 0; index < paragraphElement.length; index += 1) {
    paragraphElement[index].style.fontFamily = font; 
  }
  localStorage.setItem('fontFamily', font);
};

const fontFamilyLists = document.querySelectorAll('#font-family>button');
for (let index = 0; index < fontFamilyLists.length; index += 1) {
  fontFamilyLists[index].addEventListener('click', (event) => {
    setfontFamily(event.target.innerText);
  })
}

const defaultVersion = () => {
  let backgroundColor = localStorage.getItem('backgroundColor');
  if (backgroundColor) setBackgroundColor(backgroundColor);
  let fontColor = localStorage.getItem('fontColor');
  if (fontColor) setFontColor(fontColor);
  let fontSize = localStorage.getItem('fontSize');
  if (fontSize) setFontSize(fontSize);
  let lineHeight = localStorage.getItem('lineHeight');
  if (lineHeight) setLineHeight(lineHeight);
  let fontFamily = localStorage.getItem('fontFamily');
  if (fontFamily) setFontFamily(fontFamily);
}

defaultVersion();