import './index.css'
const boxDom = document.querySelector('#box')
boxDom.addEventListener('click', () => {
  const classList = boxDom.classList
  const classListArray = Array.from(classList)
  if (classListArray.indexOf('box1') === -1) {
    classList.remove('box2')
    classList.add('box1')
  } else {
    classList.remove('box1')
    classList.add('box2')
  }
})
