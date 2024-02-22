class Controls {
    forwards: boolean;
    backwards: boolean;
    left: boolean;
    right: boolean;
    constructor() {
        this.forwards = false;
        this.backwards = false;
        this.left = false;
        this.right = false;

        this.#keyBoardEvent();
    }

    #keyBoardEvent() {
        document.addEventListener('keydown', (e) => {
            this.#keyDownEvent(e);
        });
        document.addEventListener('keyup', (e) => {
            this.#keyUpEvent(e);
        });
    }

    #keyDownEvent(e: KeyboardEvent) {
        switch (e.key) {
            case 'ArrowUp':
                this.forwards = true;
                break;
            case 'ArrowDown':
                this.backwards = true;
                break;
            case 'ArrowLeft':
                this.left = true;
                break;
            case 'ArrowRight':
                this.right = true;
                break;
        }
    }

    #keyUpEvent(e: KeyboardEvent) {
        switch (e.key) {
            case 'ArrowUp':
                this.forwards = false;
                break;
            case 'ArrowDown':
                this.backwards = false;
                break;
            case 'ArrowLeft':
                this.left = false;
                break;
            case 'ArrowRight':
                this.right = false;
                break;
        }
    }
}