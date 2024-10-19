import * as THREE from 'three';

export function addObjects(scene)
{
    // createFloor(scene);
    // createSquare(scene);
    // createSquare1(scene);
    createThreeFloor(scene);
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

function createSquare1(scene)
{
    const geometry = new THREE.BoxGeometry(1, 2, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xfffff }); 
    const cube = new THREE.Mesh(geometry, material); 

    // Position du cube
    cube.position.y += 0.5;
    cube.position.z += 15;

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

// Fonction pour créer un sol visible
function createThreeFloor(scene) {
    const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Vert
    const groundGeometry = new THREE.PlaneGeometry(20, 20); // Taille du sol visible
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.rotation.x = -Math.PI / 2; // Incliner le sol
    scene.add(groundMesh);
}