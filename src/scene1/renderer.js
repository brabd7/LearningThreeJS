import * as THREE from 'three';

export function createRenderer()
{
    const renderer = new THREE.WebGLRenderer();
    return renderer;
}