export default class Application {
  constructor (params = {}) {
    this.block_id = params.id || 'app'
    this.block = document.getElementById(this.block_id) || document.getElementsByTagName('body')[0]
    this.block.$app = this
    this.components = {}

    this.$on('components.delete', this.removeComponent)
  }

  addComponent (component) {
    this.components[component.$name] = component
  }

  removeComponent (event) {
    let component = event.type ? event.detail : event
    delete this.$app.components[component.$name]
  }

  render () {
    for (let key in this.components) {
      if (this.components[key].render) {
        this.components[key].render()
      }
    }
  }

  $on (name, cb) {
    this.block.addEventListener(name, cb)
  }
}
