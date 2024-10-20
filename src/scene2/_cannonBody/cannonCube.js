import * as CANNON from 'cannon-es';

// Création du corps du cube
const cubeBody = new CANNON.Body({
    mass: 1, // Le cube a une masse et va tomber
    position: new CANNON.Vec3(0, 5, 0) // Positionner le cube au-dessus de l'origine
});

// Création de la forme du cube
const cubeShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));

// Lier la forme au corps
cubeBody.addShape(cubeShape);

// Exporter le corps physique
export { cubeBody };
