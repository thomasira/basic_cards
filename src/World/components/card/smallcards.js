import { MathUtils } from "three"
function createSmallCards(number, card, intersects)
{
  const smallCards = [];
  const position = { x: 4, y: -0.2 , z: 1 }
  for(let i = 0; i < number; i++) {
    
    const weight = (Math.random() * (5))
    var rotation = MathUtils.degToRad(-2 * (1 + weight))

    const newCard = card.clone()
    newCard.material = card.material.clone();
    newCard.position.set(position.x, position.y, position.z)
    newCard.rotation.z += rotation
    newCard.scale.set(.5, .5, 1)

    newCard.material.color.setHex(Math.random()*0xffffff)

    position.y += 0.7
    position.x += 0.02
    position.z -= 0.01

    newCard.name = 'small_card'

    smallCards.push(newCard)
  }
  return smallCards
}
export { createSmallCards }