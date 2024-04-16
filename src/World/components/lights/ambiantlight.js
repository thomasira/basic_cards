import { AmbientLight } from "three"

function createAmbiantLight()
{
  const ambientlight = new AmbientLight(0xaad5ff)
  ambientlight.intensity = 0.2

  return ambientlight
}

export { createAmbiantLight }