import { SpotLight, Vector2 } from "three"

function createSpotLights()
{
  const slight1 = new SpotLight(0xfffaed)
  slight1.intensity = 60
  slight1.penumbra = 1
  slight1.angle = Math.PI/3
  slight1.castShadow = true;
  slight1.shadow.mapSize = new Vector2(128, 128)
  slight1.shadow.camera.near = 0.5; 
  slight1.shadow.camera.far = 20; 
  slight1.shadow.blurSamples = 50
  slight1.shadow.radius = 8
  slight1.shadow.focus = 2

  const slight2 = new SpotLight(0x6a49bf)
  slight2.intensity = 1;
  slight2.penumbra = 1;
  slight2.castShadow = true

  slight1.position.set(2, 4, 15);
  slight2.position.set(-1, -2, 1);

  return [slight1, slight2]
}

export { createSpotLights }