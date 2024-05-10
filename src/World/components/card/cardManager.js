import { createCard } from "./card"
import { createWiggleAnimation, stopWiggleAnimation } from "./wiggleAnimate"
import { createRaycaster } from "../../systems/raycaster"
import { createCardFlipEvent, createCardIntersectEvent } from "./events"
import * as TWEEN from "@tweenjs/tween.js"

function createCardManager(mouse, camera, scene)
{
  const cardManager = {}

  const card = createCard()
  card.position.set(0, 0, 8)
  card.isClicked = false
  card.clickable = false
  card.isOn = 0
  card.isOff = 0
  cardManager.card = card

  // click event
  window.addEventListener('click', () => createCardFlipEvent(card)) 
  
  // animation events
  cardManager.tick = () => {
    TWEEN.update()
    const intersects = createRaycaster(mouse, scene, camera)
    createCardIntersectEvent(card, intersects)
  }
  return cardManager
}
export { createCardManager }