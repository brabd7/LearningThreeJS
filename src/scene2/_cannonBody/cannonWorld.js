import * as CANNON from 'cannon-es';

// Import des corps physiques
import { groundBody } from './cannonGround';
import { cubeBody } from './cannonCube';
import { playerBody } from './cannonPlayer';

// Création d'un monde
const world = new CANNON.World();

// La gravité du monde
world.gravity.set(0, -9.82, 0);

// Ajouter les corps à notre monde
world.addBody(groundBody);
world.addBody(cubeBody);
world.addBody(playerBody);

// Exporter le monde
export { world };