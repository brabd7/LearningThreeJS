import { Vector3 } from 'three';

export class Player {
    constructor(camera, cameraControls, playerBody)
    {
        this.camera = camera;
        this.cameraControls = cameraControls;
        this.vector3 = new Vector3();
        this.playerBody = playerBody;

        // Variables pour les mouvements
        this.moveForward = false;
        this.moveBackward = false;
        this.moveRight = false;
        this.moveLeft = false;
        this.moveSpeed = 5;
        
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
        rightVector.crossVectors(this.vector3, new Vector3(0, 1, 0)).normalize();

        const velocity = this.playerBody.velocity;

        // Selon l'axe de la caméra
        if (this.moveForward) {
            velocity.x = this.vector3.x * this.moveSpeed;
            velocity.z = this.vector3.z * this.moveSpeed;
        } else if (this.moveBackward) {
            velocity.x = -this.vector3.x * this.moveSpeed;
            velocity.z = -this.vector3.z * this.moveSpeed;
        } else {
            velocity.x = 0;
            velocity.z = 0;
        }

        // Gestion des mouvements gauche/droite
        if (this.moveRight) {
            velocity.x += rightVector.x * this.moveSpeed;
            velocity.z += rightVector.z * this.moveSpeed;
        } else if (this.moveLeft) {
            velocity.x -= rightVector.x * this.moveSpeed;
            velocity.z -= rightVector.z * this.moveSpeed;
        }
    
        this.camera.position.copy(this.playerBody.position);
    }
}

