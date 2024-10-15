import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { animate } from './animate';
import { resize } from './resize';
import { addObjects } from './objects';
import { Player } from './player';

// Créer la scène, la caméra et le rendu
const scene = createScene();
const camera = createCamera(); camera.position.set(0, 1, 10);
const renderer = createRenderer(); renderer.setSize( document.querySelector('.scenes').clientWidth, document.querySelector('.scenes').clientHeight ); document.querySelector('.scenes').appendChild( renderer.domElement );

// Ajouter les objets
addObjects(scene);

// Ajouter le joueur 
new Player(camera);

// Animer
animate(scene, camera, renderer);

// Resize
resize(renderer, camera);