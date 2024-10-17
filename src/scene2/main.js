import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { animate } from './animate';
import { resize } from './resize';
import { addObjects } from './objects';
import { Player } from './player';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'; // Vérouiller le pointeur de la souris afin que l'utilisateur puisse tourner à 360 degrés dans le jeu
import { Vector3 } from 'three';

// Créer la scène, la caméra et le rendu
const scene = createScene();
const camera = createCamera(); 
const renderer = createRenderer(); 

// Créer les contrôles de caméra pour vérouiller le pointeur et gérer la rotation
const cameraControls = new PointerLockControls(camera, renderer.domElement);

// Créer le Vector3
const vector3 = new Vector3();

// Ajouter les objets
addObjects(scene);

// Ajouter le joueur 
const player = new Player(camera, cameraControls, vector3);

// Animer
animate(scene, camera, renderer, player, cameraControls);

// Resize
resize(renderer, camera);