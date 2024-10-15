import { createScene } from './scene';
import { createCamera } from './camera';
import { createRenderer } from './renderer';
import { animate } from './animate';
import { resize } from './resize';
import { addObjects } from './objects';

// Créer la scène, la caméra et le rendu
const scene = createScene();
const camera = createCamera(); camera.position.set(0, 0, 5);
const renderer = createRenderer(); renderer.setSize( document.querySelector('.scenes').clientWidth, document.querySelector('.scenes').clientHeight ); document.querySelector('.scenes').appendChild( renderer.domElement );

addObjects(scene);

// Animer
animate(scene, camera, renderer);

// Resize
resize(renderer, camera);