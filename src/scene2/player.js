export class Player {
    constructor(camera)
    {
        this.camera = camera;
        this.moveForward = false;
        this.moveBackward = false;
        this.moveRight = false;
        this.moveLeft = false;
        this.moveSpeed = 0.02;

        // Mouvement
        this.move();
    }

    move()
    {
        // Touche enfoncée
        document.addEventListener('keydown', (event) => {
            this.camera.z += this.moveSpeed;
        })
    }
}

