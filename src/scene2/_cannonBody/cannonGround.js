import * as CANNON from 'cannon-es';

// Création du corps du sol
const groundBody = new CANNON.Body({
    mass: 0, // Le sol doit être immobile
});

// Création de la forme du corps
const groundShape = new CANNON.Plane();

// Lier la forme au corps
groundBody.addShape(groundShape);

// Incliner le sol
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

// Exporter le sol physique
export { groundBody };
