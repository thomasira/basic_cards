import * as TWEEN from "@tweenjs/tween.js"
import { createRaycaster } from "../../systems/raycaster"
import { MathUtils } from "three"

function createIntersectEvent(mouse, camera, scene)
{
  const intersectEvent = {}
  var card
  var isOn = 0
  var isOff = 0
  var click = false
  var isClicked = false

  window.addEventListener('click', () => {
    if(click) {
      isClicked = true
      var tweenR = new TWEEN.Tween(card.rotation)
      .to({y: MathUtils.degToRad(180)}, 600)
      .easing(TWEEN.Easing.Cubic.In)
      .start()
      tweenR.onComplete(() => isClicked = false)
    }
  })

  intersectEvent.tick = () => {
    TWEEN.update()

    const intersects = createRaycaster(mouse, camera, scene)
    var doc = document.querySelector('#scene-container')

    if(intersects[0] && intersects[0].object.name == 'card' && isClicked == false) {
      click = true
      isOn ++
      isOff = 0
      card = intersects[0].object

      const weight = .07
      
      for ( let i = 0; i < intersects.length; i ++ ) {

          let x = intersects[i].point.x
          let y = intersects[i].point.y
          card.rotation.x = - y * weight *1.2
          card.rotation.y = x * weight /2

      }
    } else if(card) {
      click = false
      isOff ++
      isOn = 0

    }

    if(isOn == 1) {
      doc.classList.add('cursor')
      var tweenP = new TWEEN.Tween(card.scale)
      .to({ x : 1.2, y : 1.2 }, 600)
      .easing(TWEEN.Easing.Elastic.Out)
      .start()
    } 
    if(isOff == 1) {
      doc.classList.remove('cursor')
      var tweenP = new TWEEN.Tween(card.scale)
      .to({ x : 1.0, y : 1.0 }, 600)
      .easing(TWEEN.Easing.Cubic.Out)
      .start()
    } 
  }
  return intersectEvent
}

export { createIntersectEvent }