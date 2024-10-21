import * as CANNON from 'cannon-es';

const playerBody = new CANNON.Body({
    mass: 1,

    // Position initiale du corps du joueur
    position: new CANNON.Vec3(0, 1, 0),

    // Corps sphérique pour le joueur
    shape: new CANNON.Sphere(1)
});

export { playerBody };