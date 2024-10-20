import * as CANNON from 'cannon-es';

// Import des corps physiques
import { groundBody } from './cannonGround';
import { cubeBody } from './cannonCube';

// Création d'un monde
const world = new CANNON.World();

// La gravité du monde
world.gravity.set(0, -9.82, 0);

// Ajouter les corps à notre monde
world.addBody(groundBody);
world.addBody(cubeBody);

// Exporter le monde
export { world };