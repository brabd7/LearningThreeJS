import * as THREE from 'three';

export function addObjects(scene)
{
    createSquare(scene);
    createFloor(scene);
}

function createSquare(scene)
{
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xf11ff }); 
    const cube = new THREE.Mesh(geometry, material); 

    // Ajouter le cube à la scène
    scene.add(cube);
}

function createFloor(scene)
{
    const geometry = new THREE.BoxGeometry(1, 0.1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xf11f }); 
    const cube = new THREE.Mesh(geometry, material); 

    // Ajouter le cube à la scène
    scene.add(cube);
}