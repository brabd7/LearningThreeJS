import * as THREE from 'three';

export function setupLighting(scene) {
    // Ajouter une lumière ambiante qui éclaire tout légèrement
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Couleur blanche, intensité 0.5
    scene.add(ambientLight);

    // Ajouter une lumière directionnelle pour simuler une source lumineuse comme le soleil
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Couleur blanche, intensité 1
    directionalLight.position.set(5, 10, 7.5); // Position de la lumière dans la scène
    scene.add(directionalLight);

    // Optionnel : ajouter une lumière ponctuelle près de l'arme pour plus de détails
    const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Couleur blanche, intensité 1, portée 100
    pointLight.position.set(0.3, -0.95, 0.95); // Placez la lumière près de l'arme
    scene.add(pointLight);
}
