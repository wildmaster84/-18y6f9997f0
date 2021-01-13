import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

class DraggableContainer extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        gameObject["__DraggableContainer"] = this;

        /** @type {Phaser.GameObjects.Container} */
        this.gameObject = gameObject;
        /** @type {Phaser.GameObjects.GameObject} */
        this.handle;
        /** @type {number} */
        this.depth = 0;

        /* START-USER-CTR-CODE */

        // Offsets based on original center vs pointer position at start of drag
        this.offsetX = 0
        this.offsetY = 0

        /* END-USER-CTR-CODE */
    }

    /** @returns {DraggableContainer} */
    static getComponent(gameObject) {
        return gameObject["__DraggableContainer"];
    }

    /* START-USER-CODE */

    start() {
        let zone = this.scene.add.zone(this.handle.x, this.handle.y, this.handle.width, this.handle.height)

        this.gameObject.addAt(zone, this.depth)

        zone.setInteractive({ draggable: true })

        zone.on('dragstart', (pointer) => { this.onDragStart(pointer) })
        zone.on('drag', (pointer) => { this.onDrag(pointer) })
    }

    onDragStart(pointer) {
        this.offsetX = this.gameObject.x - pointer.x
        this.offsetY = this.gameObject.y - pointer.y
    }

    onDrag(pointer) {
        this.gameObject.x = Math.round(pointer.x + this.offsetX)
        this.gameObject.y = Math.round(pointer.y + this.offsetY)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default DraggableContainer