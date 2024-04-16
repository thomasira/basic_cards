import { Clock } from "three"
const clock = new Clock()

class Loop
{
  #camera
  #scene
  #renderer

  constructor(camera, scene, renderer)
  {
    this.#camera = camera
    this.#scene = scene
    this.#renderer = renderer
    this.updatables = []
    //this.focusEvents();
    
  }

  start()
  {
    clock.start()
    this.#renderer.setAnimationLoop(() => {
      this.tick()
      this.#renderer.render(this.#scene, this.#camera)
    })
  }
  
  stop()
  {
    this.#renderer.setAnimationLoop(null)
    clock.stop()
  }

  tick()
  {
    const delta = clock.getDelta()
    for(const object of this.updatables)
    {
      object.tick(delta)
    }
    //console.log(`the last frame rendered in ${delta * 1000} ms`)
  }

  focusEvents()
  {
    window.onfocus = () => { clock.start() }
    window.onblur = () => { clock.stop() }
  }

}

export { Loop }