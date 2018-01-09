import ButtonComponent from './ButtonComponent'

export default class LinkComponent extends ButtonComponent {
  constructor (parent) {
    super(parent)
    this.$element_name = 'c-link'
    this.$label = 'Link'
    this.$href = ''
    this.$target = '_self'
    this.$_observe_elements.push(
      '$href',
      '$target',
    )

    this.style({
      padding: '0',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'underline',
      color: 'blue'
    })

    this.observe({
      '$href': (change) => {
        this.element.setAttribute('href', change.object.$href)
      },
      '$target': (change) => {
        this.element.setAttribute('target', change.object.$target)
      }
    })
  }

  render () {
    super.render()
    this.$href = this.element.getAttribute('href') || this.$href
    this.$target = this.element.getAttribute('target') || this.$target
    this.click((el) => {
      let href = el.target.getAttribute('href')
      let target = el.target.getAttribute('target')
      let win = window.open(href, target)
      win.focus()
    })
  }

  click (cb) {
    if (cb) {
      this.element.addEventListener('click', cb)
    } else {
      this.element.dispatchEvent(new Event('click'))
    }
  }
}
