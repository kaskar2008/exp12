import LabelComponent from './LabelComponent'

export default class ButtonComponent extends LabelComponent {
  constructor (parent) {
    super(parent)
    this.$element_name = 'c-button'
    this.$label = 'Button'

    this.style({
      padding: '10px',
      border: '1px solid #ccc',
      cursor: 'pointer'
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
