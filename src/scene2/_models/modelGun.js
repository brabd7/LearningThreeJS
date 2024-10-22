import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene } from '../init/scene';
import { playerBody } from '../_cannonBody/cannonPlayer';


// Charger le modèle GLTF
const loaderGun = new GLTFLoader();

function loadGunModel() {
    return new Promise((resolve, reject) => {
        loaderGun.load('../../../assets/sci-fi_gun_model/scene.gltf', (gltf) => {
            // Ajouter l'arme à la scène
            scene.add(gltf.scene);

            // Positionner et orienter l'arme
            gltf.scene.rotation.y = -Math.PI / 2; 
            gltf.scene.position.copy(playerBody.position).add(new THREE.Vector3(0.25, -0.92, 1.05));

            // Résoudre la promesse avec le modèle de l'arme
            resolve(gltf.scene);
        }, undefined, (error) => {
            console.error(error);
            reject(error);
        });
    });
}

export { loadGunModel };