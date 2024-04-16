import { PerspectiveCamera, Vector3 } from "three"

function createCamera()
{
  const camera = new PerspectiveCamera(
    45, 
    1,
    0.1, 
    100
  );
  camera.position.set(0, 0, 10)
  return camera
}
export { createCamera }