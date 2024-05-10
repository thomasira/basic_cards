import { Mesh, MeshStandardMaterial, PlaneGeometry } from "three"

function createBackdrop()
{
  const geometry = new PlaneGeometry(40, 40, 20, 20)
  const material = new MeshStandardMaterial({ color: 0x090909 })
  const backdrop = new Mesh(geometry, material)
  backdrop.receiveShadow = true

  backdrop.position.set(0, 0, 0)
  backdrop.name = 'backdrop'

  return backdrop
}
export { createBackdrop }