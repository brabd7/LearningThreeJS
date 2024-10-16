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
        this.moveSpeed = 0.04;
        
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
        // console.log(this.camera.getWorldDirection(this.vector3).x)
        if (this.moveForward) this.camera.position.z -= this.moveSpeed;
        if (this.moveLeft) this.camera.position.x -= this.moveSpeed;
        if (this.moveRight) this.camera.position.x += this.moveSpeed;
        if (this.moveBackward) this.camera.position.z += this.moveSpeed;
    }
}

