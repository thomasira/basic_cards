import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

function createControls(camera, canvas)
{
  const controls = new OrbitControls(camera, canvas)

  // smooth control movement
  controls.enableDamping = true
  
  const prodSettings = () => {
    controls.enableRotate = false
    controls.enablePan = false
    controls.minDistance = 8
    controls.maxDistance = 15
  }

  /* uncomment for prod */
  prodSettings()
  
  controls.tick = () => controls.update()

  return controls
}

export { createControls }