import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene } from '../init/scene';
import { playerBody } from '../_cannonBody/cannonPlayer';


// Charger le modèle GLTF
const loaderGun = new GLTFLoader();

loaderGun.load('../../../assets/sci-fi_gun_model/scene.gltf', (gltf) => {
    // L'ajouter à la scène
    scene.add(gltf.scene);
    
    // La position de l'arme
    gltf.scene.rotation.y = -Math.PI / 2; 
    gltf.scene.position.copy(playerBody.position).add(new THREE.Vector3(0.25, -0.92, 1.05));
    
}, undefined, (error) => {
    console.error(error);
});