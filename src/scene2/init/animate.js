import * as THREE from 'three';

export function animate(scene, camera, renderer, player, cameraControls, world, stats, synchronize, loadGunModel, playerBody)
{
    loadGunModel()
    .then((gunModel) => {
        function updateAnimation()
        {
            // Commence le suivi des performances
            stats.begin();

            requestAnimationFrame(updateAnimation);

            // Mouvement du joueur
            player.move();

            // L'arme suit le joueur mais aussi tourne en fonction de la caméra
            gunModel.position.copy(playerBody.position).add(new THREE.Vector3(0.25, -0.92, 1.05));

            // Mettre à jour la simulation physique du monde
            world.step(1 / 60);

            // Synchroniser les corps et les mesh ensemble
            synchronize();

            // Met à jour les rotations de la caméra
            cameraControls.update();

            // Rendu
            renderer.render(scene, camera);


            // Fin du suivi des performances
            stats.end();
        }

        updateAnimation();
    })
}