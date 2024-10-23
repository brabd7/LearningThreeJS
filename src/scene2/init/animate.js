import * as THREE from 'three';

export function animate(scene, camera, renderer, player, cameraControls, world, stats, synchronize, loadGunModel, playerBody) {
    loadGunModel()
    .then((gunModel) => {
        
        // Ajouter le modèle de l'arme en tant qu'enfant de la caméra
        camera.add(gunModel);

        // Placer l'arme à la position souhaitée par rapport à la caméra
        gunModel.position.set(0.25, -0.92, 1.05);

        function updateAnimation() {
            // Commencer le suivi des performances
            stats.begin();
            requestAnimationFrame(updateAnimation);

            // Ajouter la caméra à la scène
            scene.add(camera)

            // Mouvement du joueur
            player.move();

            // L'arme suit la caméra automatiquement puisqu'elle est attachée à la caméra.
            // Vous n'avez donc plus besoin de mettre à jour manuellement la position ou la rotation.

            // Mettre à jour la simulation physique du monde
            world.step(1 / 60);

            // Synchroniser les corps et les mesh ensemble
            synchronize();

            // Met à jour les contrôles de la caméra
            cameraControls.update();

            // Rendu
            renderer.render(scene, camera);

            // Fin du suivi des performances
            stats.end();
        }

        updateAnimation();
    })
    .catch((error) => {
        console.error("Erreur lors du chargement de l'arme :", error);
    });
}
