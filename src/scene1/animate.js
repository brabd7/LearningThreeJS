export function animate(scene, camera, renderer)
{
    function updateAnimation()
    {
        requestAnimationFrame(updateAnimation);
        renderer.render(scene, camera);
    }

    updateAnimation();
}