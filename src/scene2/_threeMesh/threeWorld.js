// Importer les mesh
import { groundMesh } from './threeGround';
import { cubeMesh } from './threeCube';

// Ajouter à la scène
export function threeWorld(scene)
{
    scene.add(groundMesh);
    scene.add(cubeMesh);
}

