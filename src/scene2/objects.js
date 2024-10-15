import * as THREE from 'three';

export function addObjects(scene)
{
    createSquare(scene);
    createFloor(scene);
}

function createSquare(scene)
{
    const geometry = new THREE.BoxGeometry(1, 2, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xf11ff }); 
    const cube = new THREE.Mesh(geometry, material); 

    // Position du cube
    cube.position.y += 0.5;

    // Ajouter le cube à la scène
    scene.add(cube);
}

function createFloor(scene) {
    const geometry = new THREE.BoxGeometry(100, 1, 100);  // Longeur = 100, Hauteur = 0.1, Largeur = 100
    const material = new THREE.MeshBasicMaterial({ color: 0xf11f }); 
    const floor = new THREE.Mesh(geometry, material); 

    // Ajouter le sol à la scène
    scene.add(floor);
}
