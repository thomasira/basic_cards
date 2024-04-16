import { Mesh, MeshStandardMaterial, PlaneGeometry, DoubleSide } from "three"

function createCard()
{
  const geometry = new PlaneGeometry(3.5, 2);
  const material = new MeshStandardMaterial( {color:0x0da000 } )
  material.side = DoubleSide
  const card = new Mesh(geometry, material)  
  card.castShadow = true;
  card.position.set(-.7, .5, 5)
  card.name = 'card'
  return card
}

export { createCard }