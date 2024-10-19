export function animate(scene, camera, renderer, player, cameraControls, world)
{
    function updateAnimation()
    {
        requestAnimationFrame(updateAnimation);

        // Mouvement du joueur
        player.move();

        // Mettre à jour la simulation physique du monde
        world.step(1 / 60);

        // Met à jour les rotations de la caméra
        cameraControls.update();

        renderer.render(scene, camera);
    }

    updateAnimation();
}