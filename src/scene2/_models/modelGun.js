import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene } from '../init/scene';
import { playerBody } from '../_cannonBody/cannonPlayer';


// Charger le modèle GLTF
const loaderGun = new GLTFLoader();

loaderGun.load('../../../assets/sci-fi_gun_model/scene.gltf', (gltf) => {
    scene.add(gltf.scene);
    
    // Créez un vecteur d'offset
    const offset = new THREE.Vector3(0, 0, -10); // Ajustez ces valeurs pour positionner correctement l'arme
    gltf.scene.position.copy(playerBody).add(offset);
    
    console.log('ok');
}, undefined, (error) => {
    console.error(error);
});