import VisualComponent from 'classes/base/VisualComponent'

export default class PlaneComponent extends VisualComponent {
  constructor (parent) {
    super(parent)
    this.$element_name = 'c-plane'
    this.components = {}
  }

  addComponent (component) {
    this.components[component.$name] = component
  }

  removeComponent (event) {
    let component = event.type ? event.detail : event
    delete this.$app.components[component.$name]
  }

  render () {
    this.$on('components.delete', this.removeComponent)
    this.element.$app = this
    for (let key in this.components) {
      if (this.components[key].render) {
        this.components[key].render()
      }
    }
    this.show()
  }

  $on (name, cb) {
    this.element.addEventListener(name, cb)
  }
}
