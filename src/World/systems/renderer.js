import { WebGLRenderer } from "three"

function createRenderer()
{
  const renderer = new WebGLRenderer()
  renderer.antialias = true
  renderer.shadowMap.enabled = true
  return renderer
}
export { createRenderer }