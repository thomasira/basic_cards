import { Mesh, MeshStandardMaterial, PlaneGeometry, Group, MathUtils } from "three"

function createCard()
{
  const geometry = new PlaneGeometry(3.5, 2)
  const material = new MeshStandardMaterial({ color: 0x0da000 })
  const frontCard = new Mesh(geometry, material)

  const backCard = frontCard.clone()
  backCard.material = material.clone(material)
  backCard.material.color.setHex(0x49306c)
  backCard.rotateY(MathUtils.degToRad(180))
  backCard.position.set(0, 0, -.001)

  const card = new Group()
  card.add(frontCard, backCard)
  card.castShadow = true
  frontCard.name = 'card'
  backCard.name = 'card'
  return card
}
export { createCard }