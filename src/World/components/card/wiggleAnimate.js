import * as TWEEN from "@tweenjs/tween.js"
import { MathUtils } from "three"

var tweens = []
function createWiggleAnimation(card)
{
  const limitx = 10
  const limity = 5
  const speed = 10000

  var tweeny1 = new TWEEN.Tween(card.rotation)
  .to({y: MathUtils.degToRad(-limity)} , speed)
  .easing(TWEEN.Easing.Sinusoidal.InOut)
  var tweeny2 = new TWEEN.Tween(card.rotation)
  .to({y: MathUtils.degToRad(limity)} , speed)
  .easing(TWEEN.Easing.Sinusoidal.InOut)
  var tweenx1 = new TWEEN.Tween(card.rotation)
  .to({x: MathUtils.degToRad(limitx)} , speed)
  .easing(TWEEN.Easing.Sinusoidal.InOut)
  var tweenx2 = new TWEEN.Tween(card.rotation)
  .to({x: MathUtils.degToRad(-limitx)} , speed)
  .easing(TWEEN.Easing.Sinusoidal.InOut)

  tweeny1.chain(tweeny2)
  tweeny2.chain(tweeny1)
  tweeny1.start()

  tweenx1.chain(tweenx2)
  tweenx2.chain(tweenx1)
  setTimeout(() => { tweenx1.start() }, speed/2)
  tweens.push(tweeny1, tweeny2, tweenx1, tweenx2)
}

function stopWiggleAnimation()
{
  tweens.forEach(tween => tween.stop())
}
export { createWiggleAnimation, stopWiggleAnimation }