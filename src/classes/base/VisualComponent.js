import Component from './Component'

export default class VisualComponent extends Component {
  constructor (parent) {
    super(parent)
    this.$element_name = 'c-component'
    this.$app_block = document.querySelector('body')
    this.$style = {
      display: 'block',
      padding: '0',
      margin: '0',
      position: 'initial'
    }
    this.$is_hidden = true

    this.observe({
      '$is_hidden': (change) => {
        this.element.style.display = change.object.$is_hidden ? 'none' : this.$style.display
      },
      '$style': (change) => {
        for (let key in this.$style) {
          this.element.style[key] = this.$style[key]
        }
      }
    })
  }

  get __$style_position_list () {
    return [
      'initial',
      'fixed',
      'absolute',
      'relative'
    ]
  }

  get __$style_display_list () {
    return [
      'initial',
      'block',
      'inline',
      'none'
    ]
  }

  get element () {
    let el = (this.$parent ? this.$parent.element : this.$app_block).querySelector(`${this.$element_name}[name="${this.$name}"]`)
    // if (!el) {
    //   var new_el = document.createElement(this.$element_name)
    //   (this.$parent ? this.$parent.element : this.$app_block).appendChild(new_el)
    //   new_el.setAttribute('name', this.$name)
    //   el = (this.$parent ? this.$parent.element : this.$app_block).querySelector(`${this.$element_name}[name="${this.$name}"]`)
    // }
    return el
  }

  // render () {
  //   let el = (this.$parent ? this.$parent.element : this.$app_block).querySelector(`${this.$element_name}[name="${this.$name}"]`)
  //   if (!el) {
  //     let new_el = document.createElement(this.$element_name)
  //     (this.$parent ? this.$parent.element : this.$app_block).appendChild(new_el)
  //     new_el.setAttribute('name', this.$name)
  //     el = new_el //(this.$parent ? this.$parent.element : this.$app_block).querySelector(`${this.$element_name}[name="${this.$name}"]`)
  //   }
  //   this.element = el
  // }

  delete () {
    this.element.remove()
    this.unobserve(['$is_hidden', '$style'])
    this.$emit('components.delete', this)
  }

  style (new_style) {
    if (new_style) {
      this.$style = {...this.$style, ...new_style}
    } else {
      return this.$style
    }
  }

  show () {
    this.$is_hidden = false
  }

  hide () {
    this.$is_hidden = true
  }
}
