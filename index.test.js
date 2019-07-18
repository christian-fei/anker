const tap = require('tap')
const anker = require('.')

tap.test('anker insert an <a> element inside of a passed element and set its #id', test => {
  const element = {
    id: undefined,
    setAttribute (_, id) { this.id = id },
    innerText: 'Heading',
    innerHTML: 'Heading'
  }
  const ankeredElement = anker(element)
  test.is(ankeredElement.id, 'heading')
  test.is(ankeredElement.innerHTML, '<a href="#heading">Heading</a>')
  test.end()
})
