import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { animate } from './animate';
import { resize } from './resize';
import { addObjects } from './objects';
import { Player } from './player';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'; // Vérouiller le pointeur de la souris afin que l'utilisateur puisse tourner à 360 degrés dans le jeu


// Créer la scène, la caméra et le rendu
const scene = createScene();
const camera = createCamera(); camera.position.set(0, 1, 10);
const renderer = createRenderer(); renderer.setSize( document.querySelector('.scenes').clientWidth, document.querySelector('.scenes').clientHeight ); document.querySelector('.scenes').appendChild( renderer.domElement );

// Ajouter les objets
addObjects(scene);

// Ajouter le joueur 
const player = new Player(camera);

// Animer
animate(scene, camera, renderer, player);

// Resize
resize(renderer, camera);