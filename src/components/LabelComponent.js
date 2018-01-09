import VisualComponent from 'classes/base/VisualComponent'

export default class LabelComponent extends VisualComponent {
  constructor (parent) {
    super(parent)
    this.$element_name = 'c-label'
    this.$label = 'Label'
    this.$_observe_elements.push(
      '$label'
    )
    this.style({
      display: 'inline'
    })

    this.observe({
      '$label': (change) => {
        this.element.innerText = change.object.$label
      }
    })
  }

  render () {
    // super.render()
    this.$label = this.element.innerText || this.$label
    this.show()
  }
}
