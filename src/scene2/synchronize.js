// Import des corps physiques
import { groundBody } from './_cannonBody/cannonGround';
import { cubeBody } from './_cannonBody/cannonCube';

// Import des mesh
import { groundMesh } from './_threeMesh/threeGround';
import { cubeMesh } from './_threeMesh/threeCube';

// Liste des objets
const objects = [
    { mesh: groundMesh, body: groundBody },
    { mesh: cubeMesh, body: cubeBody }
];

// Fonction pour synchroniser les corps et les mesh ensemble
export function synchronize()
{
    for (const { mesh, body } of objects) {
        // Mettre à jour la position du mesh avec celle du body
        mesh.position.copy(body.position);

        // Mettre à jour la rotation du mesh en utilisant le quaternion du body
        mesh.quaternion.copy(body.quaternion);
    }
}