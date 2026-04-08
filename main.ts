sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let asteroeid: Sprite = null
let spaceship = sprites.create(img`
    8 8 . . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 8 . . . . . . . . . . . . 
    8 8 8 f . . . . . . . . . . . . 
    8 8 8 f 8 . . . . . . . . . . . 
    8 8 a f 8 c . . . . . . . . . . 
    a a a c 3 c 8 8 . . . . . . . . 
    a a 3 c 3 c 3 8 8 f c f c c c c 
    3 3 3 a 3 a 1 1 3 f 3 f b d d d 
    3 3 3 a 1 a a a . . . . . . . . 
    3 3 3 f a a . . . . . . . . . . 
    3 1 1 f a . . . . . . . . . . . 
    1 3 3 a . . . . . . . . . . . . 
    3 3 a a . . . . . . . . . . . . 
    a a a . . . . . . . . . . . . . 
    a a . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
spaceship.left = 5
controller.moveSprite(spaceship, 0, 100)
spaceship.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    asteroeid = sprites.createProjectileFromSide(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, randint(-30, -70), 0)
    asteroeid.y = randint(0, 120)
})
