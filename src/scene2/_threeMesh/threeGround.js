import * as THREE from 'three';

// Création de la géométrie du sol
const geometry = new THREE.PlaneGeometry(25, 25);

// Création d'une texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('../../../assets/ground.jpg'); // Chemin vers ta texture

// Création du matériau du sol
const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });

// Création du sol
const groundMesh = new THREE.Mesh(geometry, material);

// Incliner le sol pour qu'il soit horizontal
groundMesh.rotation.x = -Math.PI / 2;

// Exporter le sol mesh
export { groundMesh };
