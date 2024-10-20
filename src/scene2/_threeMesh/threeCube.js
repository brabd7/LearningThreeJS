import * as THREE from 'three';

// Création de la géométrie du cube
const cubeSize = 1; // Taille du cube
const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize); // Crée un cube de taille spécifiée

// Création du matériau du cube
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Couleur verte

// Création du maillage du cube
const cubeMesh = new THREE.Mesh(geometry, material);

// Positionner le cube à la même hauteur que son corps physique
cubeMesh.position.set(0, 5, 0); // Assurez-vous que le maillage est au-dessus du sol

// Exporter le maillage
export { cubeMesh };
