import * as THREE from 'three';

export function createBullets(scene, playerBody)
{
    // Création de la balle
    const geometry = new THREE.SphereGeometry(0.02, 8, 8); // Balle de petite taille
    const material = new THREE.MeshBasicMaterial({ color: 0x00000 });
    const bulletMesh = new THREE.Mesh(geometry, material);
    
    // La position de la balle
    bulletMesh.position.set(playerBody.position.x + 0.12, 0.9, playerBody.position.z - 1);

    // Ajout de la balle à la scène
    scene.add(bulletMesh);

    console.log(bulletMesh.position)
}