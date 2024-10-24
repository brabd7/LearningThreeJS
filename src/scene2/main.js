// Fichiers d'initialisation
import { scene } from './init/scene';
import { createCamera } from './init/camera';
import { resize } from './init/resize';
import { createRenderer } from './init/renderer';
import { animate } from './init/animate';
import { stats } from './init/stats';
import { setupLighting } from './init/light';

// Les classes
import { Player } from './player';

// Les autres modules
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'; // Vérouiller le pointeur de la souris afin que l'utilisateur puisse tourner à 360 degrés dans le jeu

// Le monde physique et le monde three
import { world } from './_cannonBody/cannonWorld';
import { threeWorld } from './_threeMesh/threeWorld';
import { synchronize } from './synchronize';
import { playerBody } from './_cannonBody/cannonPlayer';

// Importer les modèles 3D
import { loadGunModel } from './_models/modelGun';

import { bullets } from './_threeMesh/threeBullets';

// Créer la scène, la caméra et le rendu
const camera = createCamera();
const renderer = createRenderer(); 

// Créer les contrôles de caméra pour vérouiller le pointeur et gérer la rotation
const cameraControls = new PointerLockControls(camera, renderer.domElement);

// threeWorld
threeWorld(scene);

// La lumière
setupLighting(scene);

// Ajouter le joueur 
const player = new Player(camera, cameraControls, playerBody, scene, world);

// Animer
animate(scene, camera, renderer, player, cameraControls, world, stats, synchronize, loadGunModel, bullets);

// Resize
resize(renderer, camera);
