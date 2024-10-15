export function animate(scene, camera, renderer, player)
{
    function updateAnimation()
    {
        requestAnimationFrame(updateAnimation);

        // Mouvement du joueur
        player.move();

        renderer.render(scene, camera);
    }

    updateAnimation();
}