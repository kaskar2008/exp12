export default class Component {
  constructor (parent) {
    this.$parent = parent
    this.$name = ''
    this.$_observes = {}
    this.$_observe_elements = []

    Object.observe(this, (changes) => {
      changes.forEach(change => {
        if (this.$_observes[change.name]) {
          this.$_observes[change.name](change)
        }
      })
    })
  }

  $emit (name, params) {
    if (this.$parent) {
      this.$parent.element.dispatchEvent(new CustomEvent(name, { 'detail': params }))
    }
  }

  observe (items) {
    this.$_observes = { ...this.$_observes, ...items }
  }

  unobserve () {
    this.$_observe_elements.forEach(item => {
      delete this.$_observes[item]
    })
  }
}
