// Importer les mesh
import { groundMesh } from './threeGround';

// Ajouter à la scène
export function threeWorld(scene)
{
    scene.add(groundMesh);
}

