export class Player {
    constructor(camera)
    {
        this.camera = camera;
        this.moveForward = false;
        this.moveBackward = false;
        this.moveRight = false;
        this.moveLeft = false;
        this.moveSpeed = 0.2;

        // Mouvement
        this.activateMove();

        // Rotation de la caméra
        this.rotationCamera();
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
        if (this.moveForward) this.camera.position.z -= this.moveSpeed;
        if (this.moveLeft) this.camera.position.x -= this.moveSpeed;
        if (this.moveRight) this.camera.position.x += this.moveSpeed;
        if (this.moveBackward) this.camera.position.z += this.moveSpeed;
    }

    rotationCamera()
    {
        document.addEventListener('mousemove', (event) => {
            console.log(event.screenX)
            this.camera.rotation.y += 0.001;
        })
    }
}

