export function animate(scene, camera, renderer, player, cameraControls, world, stats, synchronize)
{
    function updateAnimation()
    {
        // Commence le suivi des performances
        stats.begin();

        requestAnimationFrame(updateAnimation);

        // Mouvement du joueur
        player.move();

        // Mettre à jour la simulation physique du monde
        world.step(1 / 60);

        // Synchroniser les corps et les mesh ensemble
        synchronize();

        // Met à jour les rotations de la caméra
        cameraControls.update();

        renderer.render(scene, camera);

        // Fin du suivi des performances
        stats.end();
    }

    updateAnimation();
}