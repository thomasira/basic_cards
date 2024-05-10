import { createControls } from "./systems/controls"
import { createScene } from "./components/scene"
import { createCamera } from "./components/camera"
import { createRenderer } from "./systems/renderer"
import { Resizer } from "./systems/Resizer"
import { Loop } from "./systems/Loop"
import { Vector2 } from "three"

import { createSpotLights } from "./components/lights/spotlights"
import { createAmbiantLight } from "./components/lights/ambiantlight"
import { createBackdrop } from "./components/backdrop"
import { createCardManager } from "./components/card/cardManager"

let camera
let renderer
let scene
let loop
let spotlights
let ambiantlight
let mouse = new Vector2({ x: 1, y: 1 }) // out of the screen
let intersects

class World
{
  constructor(container)
  {
    // setting up the scene
    renderer = createRenderer()
    camera = createCamera()
    scene = createScene()
    container.append(renderer.domElement)

    //setting the animation loop
    loop = new Loop(camera, scene, renderer)
    
    // creating controls + adding to loop
    /* const controls = createControls(camera, renderer.domElement)
    loop.updatables.push(controls) */

    // creating window resizing
    new Resizer(container, camera, renderer)
    
    window.addEventListener('mousemove', (e) => this.mouseEvent(e))

    const spotLights = createSpotLights()
    scene.add(spotLights[0])
    const ambiantlight = createAmbiantLight()
    scene.add(ambiantlight)
    const backdrop = createBackdrop()
    scene.add(backdrop)
    const cardManager = createCardManager(mouse, scene, camera)
    scene.add(cardManager.card)
    loop.updatables.push(cardManager)
  }

  render()
  {
    renderer.render(scene, camera)
  }

  start()
  {
    loop.start()
  }

  stop()
  {
    loop.stop()
  }
  
  // capturing mouse
  mouseEvent(e)
  {
    e.preventDefault();
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }
}


export { World }