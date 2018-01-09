import 'object.observe/dist/object-observe-lite.js'
import 'misc/dext.js'

import C_Plane from 'components/PlaneComponent'
import C_Label from 'components/LabelComponent'
import C_Button from 'components/ButtonComponent'
import C_Link from 'components/LinkComponent'

(function (app) {
  const main = new C_Plane()
  main.$name = 'main_view'
  main.$app_block = document.getElementById('app')

  const label1 = new C_Label(main)
  label1.$name = 'label1'

  const button1 = new C_Button(main)
  button1.$name = 'button1'

  const link1 = new C_Link(main)
  link1.$name = 'link1'

  main.addComponent(label1)
  main.addComponent(button1)
  main.addComponent(link1)

  main.render()
  app.main = main

  window.app = app
})({})
