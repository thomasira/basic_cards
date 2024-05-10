import { Raycaster } from "three"

function createRaycaster(mouse, camera, scene)
{
  const raycaster = new Raycaster()
  raycaster.setFromCamera(mouse, camera)
  return raycaster.intersectObjects(scene.children, true)
}
export { createRaycaster }