import * as TWEEN from "@tweenjs/tween.js"
import { createRaycaster } from "../../systems/raycaster"
import { MathUtils } from "three"

function createSIntersectEvent(mouse, camera, scene, card)
{
  const sIntersectEvent = {}
  var targetCard
  var isOn = 0
  var isOff = 0
  const basePosition = { x: card.position.x, y: card.position.y }
  const baseColor = { r: card.material.color.r, g: card.material.color.g , b: card.material.color.b}
  var click = false
  sIntersectEvent.tick = () => {
    TWEEN.update()

    const intersects = createRaycaster(mouse, camera, scene)
    var doc = document.querySelector('#scene-container')

    if(intersects[0] && intersects[0].object.id == card.id) {
      if(!doc.classList.contains('cursor')) doc.classList.add('cursor')
      isOn ++
      isOff = 0
      targetCard = intersects[0].object

    } else if(targetCard) {
      isOff ++
      isOn = 0
    }

    if(isOn == 1) {
      
      var tweenP = new TWEEN.Tween(card.position)
      .to({ x: card.position.x - 0.2, y: card.position.y + 0.1 }, 200)
      .easing(TWEEN.Easing.Cubic.Out)
      .start()
      var tweenC = new TWEEN.Tween(card.material.color)
      .to({ r: baseColor.r + 0.2 , g: baseColor.g + 0.2, b: baseColor.b + 0.2}, 200)
      .easing(TWEEN.Easing.Cubic.Out)
      .start()
    } 
    if(isOff == 1) {
      doc.classList.remove('cursor')
      var tweenP = new TWEEN.Tween(card.position)
      .to({ x : basePosition.x,  y: basePosition.y }, 200)
      .easing(TWEEN.Easing.Cubic.Out)
      .start()
      var tweenC = new TWEEN.Tween(card.material.color)
      .to({ r: baseColor.r, g: baseColor.g, b: baseColor.b}, 200)
      .easing(TWEEN.Easing.Cubic.Out)
      .start()
    } 
  }
  return sIntersectEvent
}

export { createSIntersectEvent }