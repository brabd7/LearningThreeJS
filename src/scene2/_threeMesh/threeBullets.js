import * as THREE from 'three';

// Les balles tirées
const bullets = [];

export function createBullets(scene, camera) {
    // Création de la balle
    const geometry = new THREE.SphereGeometry(0.02, 8, 8); // Balle de petite taille
    const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const bulletMesh = new THREE.Mesh(geometry, material);

    // Positionner la balle à la caméra
    bulletMesh.position.copy(camera.position);

    // Obtenir la direction où la caméra pointe
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);

    // Ajuster la position de la balle pour qu'elle soit légèrement devant la caméra
    bulletMesh.position.add(direction.clone().multiplyScalar(0.6)); // Déplacer un peu en avant

    // Ajouter à la liste des balles tirées
    bullets.push(bulletMesh);

    // Ajouter la balle à la scène
    scene.add(bulletMesh);
}

export { bullets };