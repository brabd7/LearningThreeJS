import * as THREE from 'three';

export function createRenderer()
{
    const renderer = new THREE.WebGLRenderer();

    // Configurer la taille de rendu et à l'ajouter dans la page HTML
    renderer.setSize( window.innerWidth, window.innerHeight ); document.body.appendChild( renderer.domElement );
    
    // Changer la couleur de fond de la scène en bleu ciel
    renderer.setClearColor(new THREE.Color('skyblue'));
    
    return renderer;
}