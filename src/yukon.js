import Game from '@/Game'


window.addEventListener('load', function () {

    new Game({
        width: 1520,
        height: 960,
        type: Phaser.AUTO,
        backgroundColor: '#14529b',
        autoRound: true,
        roundPixels: true,
        parent: 'client-container',
        dom: {
            createContainer: true
        },
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        }
    })

})