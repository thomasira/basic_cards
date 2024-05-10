class Resizer
{
  constructor(container, camera, renderer)
  {

    camera.aspect = container.clientWidth / container.clientHeight
   /*  camera.aspect = 4/3 */
    /* console.log(1) */
    camera.position.set(1.5, 0, 14)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.updateProjectionMatrix()
    renderer.setPixelRatio(window.devicePixelRatio)
    
    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.updateProjectionMatrix()
    });
  }
}
export { Resizer }