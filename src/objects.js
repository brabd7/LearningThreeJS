import * as THREE from 'three';

export function addObjects(scene)
{
    createSquare(scene);
}

function createSquare(scene)
{
    const geometry = new THREE.BoxGeometry(1, 1, 1); // Crée un cube de 1x1x1
    const material = new THREE.MeshBasicMaterial({ color: 0xf11ff }); 
    const cube = new THREE.Mesh(geometry, material); // Crée le mesh avec géométrie et matériau
    scene.add(cube); // Ajoute le cube à la scène
}