function anchorify (element) {
  const id = (element.innerText || '').toLowerCase().replace(/ /gi, '-')
  element.setAttribute('id', id)
  const text = element.innerText
  element.innerHTML = `<a href="#${id}">${text}</a>`
  return element
}

module.exports = anchorify
