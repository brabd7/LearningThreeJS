import * as THREE from 'three';

export function createRenderer()
{
    const renderer = new THREE.WebGLRenderer();

    // Changer la couleur de fond de la scène en bleu ciel
    renderer.setClearColor(new THREE.Color('skyblue'));
    
    return renderer;
}