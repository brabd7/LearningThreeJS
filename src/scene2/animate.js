export function animate(scene, camera, renderer, player, cameraControls)
{
    function updateAnimation()
    {
        requestAnimationFrame(updateAnimation);

        // Mouvement du joueur
        player.move();

        // Met à jour les rotations de la caméra
        cameraControls.update();

        renderer.render(scene, camera);
    }

    updateAnimation();
}