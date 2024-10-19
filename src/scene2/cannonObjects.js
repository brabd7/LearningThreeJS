import * as CANNON from 'cannon-es';
import { world } from './world';



// Créer les objets physiques
export function addCannonObjects(world)
{
    createCannonFloor(world);
}

// Fonction pour créer le sol
function createCannonFloor(world)
{
    const groundBody = new CANNON.Body({
        mass: 0, // Le sol doit être immobile
    });

    const groundShape = new CANNON.Plane();
    groundBody.addShape(groundShape);
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // Incliner le sol
    world.addBody(groundBody); // Ajouter le sol au monde physique
}