import { Vector3 } from 'three';

export class Player {
    constructor(camera, cameraControls, vector3)
    {
        this.camera = camera;
        this.cameraControls = cameraControls;
        this.vector3 = vector3;

        // Variables pour les mouvements
        this.moveForward = false;
        this.moveBackward = false;
        this.moveRight = false;
        this.moveLeft = false;
        this.moveSpeed = 0.1
        
        // Mouvement
        this.activateMove();

        // Verrouiller le pointeur quand le joueur est créé afin que la souris contrôle la caméra
        document.addEventListener('click', () => {
            this.cameraControls.lock();
        });
    }

    activateMove()
    {
        // Touche enfoncée
        document.addEventListener('keydown', (event) => {
            switch (event.code)
            {
                case "KeyW":
                    this.moveForward = true;
                    break;
                case "KeyQ":
                    this.moveLeft = true;
                    break;
                case "KeyD":
                    this.moveRight = true;
                    break;
                case "KeyS":
                    this.moveBackward = true;
                    break;
                default:
                    break;
            }
        })

        // Touche relevée
        document.addEventListener('keyup', (event) => {
            switch (event.code)
            {
                case "KeyW":
                    this.moveForward = false;
                    break;
                case "KeyQ":
                    this.moveLeft = false;
                    break;
                case "KeyD":
                    this.moveRight = false;
                    break;
                case "KeyS":
                    this.moveBackward = false;
                    break;
                default:
                    break;
            }
        })
    }

    move()
    {
        // On obtient la direction la direction dans laquelle la caméra regarde, et on la stocke dans this.vector3
        this.camera.getWorldDirection(this.vector3);
        
        // Ignorer la composante Y pour ne pas voler (monter en l'air)
        this.vector3.y = 0;

        // Normaliser le vector3 pour toujours avoir la même vitesse
        this.vector3.normalize();

        // Pour la droite et la gauche, on doit créer un vector de notre vector actuel
        const rightVector = new Vector3();
        rightVector.crossVectors(this.vector3, new Vector3(0, 1, 0));

        // Selon l'axe de la caméra
        if (this.moveForward) this.camera.position.add(this.vector3.multiplyScalar(this.moveSpeed));
        if (this.moveBackward) this.camera.position.add(this.vector3.multiplyScalar(-this.moveSpeed));
        if (this.moveRight) this.camera.position.add(rightVector.multiplyScalar(this.moveSpeed));    
        if (this.moveLeft) this.camera.position.add(rightVector.multiplyScalar(-this.moveSpeed));            
        
        // Selon l'axe de la scène
        // if (this.moveForward) this.camera.position.z -= this.moveSpeed;
        // if (this.moveLeft) this.camera.position.x -= this.moveSpeed;
        // if (this.moveRight) this.camera.position.x += this.moveSpeed;
        // if (this.moveBackward) this.camera.position.z += this.moveSpeed;
    }
}

