import { PerspectiveCamera, Vector3 } from "three"

function createCamera()
{
  const camera = new PerspectiveCamera(45, 1, 0.1, 20)
  return camera
}
export { createCamera }