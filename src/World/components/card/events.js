import * as TWEEN from "@tweenjs/tween.js"
import { MathUtils } from "three"


// record side of card rad for rotation based interactions
var sideY = 0

// for cursor
const doc = document.querySelector('#scene-container')

/**
 * tween when card is clicked, check for and set isClicked and clickable props to help smooth running
 * 
 * @param {Object} card 
*/
function createCardFlipEvent (card) {
  if(card.clickable) {

    sideY += MathUtils.degToRad(180)
    card.isClicked = true
    
    new TWEEN.Tween(card.rotation)
      .to({ y: sideY }, 600)
      .easing(TWEEN.Easing.Cubic.In)
      .start()
      .onComplete(() => {
        card.isClicked = false

        new TWEEN.Tween(card.rotation)
          .to({ x: 0, y: sideY, z: 0 }, 600)
          .easing(TWEEN.Easing.Linear.None)
          .start();
      })
  }
}

function createCardIntersectEvent (card, intersects) {
  if(intersects[0] && !card.isClicked && intersects.find(intersect => intersect.object.name == 'card')) {
    card.clickable = true
    card.isOn ++
    card.isOff = 0

    // apply rotation of front card based on weight
    const weight = MathUtils.degToRad(6)
    const intersection = intersects[0]
    const { x, y } = intersection.point
    const rotationX = -y * weight * 1.2
    const rotationY = x * weight / 2

    new TWEEN.Tween(card.rotation)
      .to({ x: rotationX, y: rotationY + sideY }, 200)
      .easing(TWEEN.Easing.Linear.None)
      .start();
  } else {
    card.clickable = false
    card.isOff ++
    card.isOn = 0
  }

  // trigger once when on
  if(card.isOn == 1) {

    doc.classList.add('cursor')

    var tweenP = new TWEEN.Tween(card.scale)
      .to({ x : 1.2, y : 1.2 }, 600)
      .easing(TWEEN.Easing.Elastic.Out)
      .start()
    /* stopWiggleAnimation(card) */
  } 

  // trigger once when off
  if(card.isOff == 1) {
    doc.classList.remove('cursor')
    var tweenP = new TWEEN.Tween(card.scale)
    .to({ x : 1.0, y : 1.0 }, 600)
    .easing(TWEEN.Easing.Cubic.Out)
    tweenP.start()
    if(!card.isClicked) {
      new TWEEN.Tween(card.rotation)
        .to({ x: 0, y: sideY, z: 0 }, 600)
        .easing(TWEEN.Easing.Linear.None)
        .start()
    }
  }
}
export { createCardFlipEvent, createCardIntersectEvent }