import { AmbientLight } from "three"

function createAmbiantLight()
{
  const ambientlight = new AmbientLight(0xaad5ff)
  ambientlight.intensity = 0.5

  return ambientlight
}

export { createAmbiantLight }