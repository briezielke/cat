function createhero () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . 
        f f f f . . . f f f . . . . 
        f b 1 f . . f 1 b f . . . . 
        f b b 1 f f 1 b b f . . . . 
        f b b 1 1 f 1 b b f . . . . 
        f 1 1 1 1 1 1 1 1 f . . . . 
        f 1 f 1 1 1 1 f 1 f . . . . 
        f 1 1 1 1 1 1 1 1 f f f f . 
        f 1 1 1 2 2 1 1 1 1 f 1 f . 
        f f 1 1 1 1 1 1 6 1 1 1 f . 
        . f 6 6 6 6 6 6 1 1 1 f f . 
        . f 1 1 1 1 1 1 1 f f f . . 
        . f 1 f 1 f f f 1 f . . . . 
        . . f f f f . . f f . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(6, 5)
}
function creategame () {
    scene.setBackgroundImage(img`
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999933333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999333333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999333333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999333333333333333333333333339999999999999999999999
        3333333333333333333333333339999999999999999999999999993333333333333333333333333333399999999999999999999999999999333333333333333333333333339999999999999999999999
        `)
}
let mySprite: Sprite = null
creategame()
createhero()
