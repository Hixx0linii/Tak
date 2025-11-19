const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

//Canvas Things
canvas.height = 1080
canvas.width = 1920
c.fillStyle = 'black'
c.fillRect(0,0,canvas.width,canvas.height)

//Variables
let lastTime = 0;
const paddleSpeed = 600;
let text = document.getElementById("score")
let gameStatus = true
let direction_array = [-1,1]

class Player{
    constructor({position,velocity, color = 'white'}){
        this.position = position
        this.velocity = velocity
        this.height = 200
        this.width = 50
        this.color = color
        this.score = 0
    }
    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    checkForCollision(){
        if(this.position.y <= 0) {this.position.y = 0}
        if(this.position.y+this.height >= canvas.height) {this.position.y = canvas.height-this.height}
    }
    update(){
        this.draw()
        this.checkForCollision()
    }
}

class Ball{
    constructor({position,speed,color = 'yellow'}){
        this.position = position
        this.speed = speed
        this.color = color
        this.width = 50
        this.height = this.width
    }
    draw(){
        c.fillStyle = this.color
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update(){
        this.draw()
    }
}

const player1 = new Player({
    position: {
        x:0,
        y:400
    },
    velocity: {
        x:0,
        y:0
    }
})

const player2 = new Player({
    position: {
        x:canvas.width-50,
        y:400
    },
    velocity: {
        x:0,
        y:0
    }
})

const ball = new Ball({
    position: {
        x:(canvas.width/2)-50,
        y:(canvas.height/2)-50
    },
    speed: 3
})

const keys = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    ArrowDown: {
        pressed: false
    }
}

window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'w':
            keys.w.pressed = true
            break;
        case 's':
            keys.s.pressed = true
            break;
        case 'ArrowUp':
            keys.ArrowUp.pressed = true
            break;
        case 'ArrowDown':
            keys.ArrowDown.pressed = true
            break;
    }
})
window.addEventListener('keyup', (event) => {
    switch(event.key) {
        case 'w':
            keys.w.pressed = false
            break;
        case 's':
            keys.s.pressed = false
            break;
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break;
        case 'ArrowDown':
            keys.ArrowDown.pressed = false
            break;
    }
})

const direction = {
    x: -1,
    y: 1
}

function getRandomDirection(){
    var i = Math.floor(Math.random() * direction_array.length);
    direction.x = direction_array[i]
    var i = Math.floor(Math.random() * direction_array.length);
    direction.y = direction_array[i]
}

function showWinner(){
    if (player1.score == 11){
        text.innerText = "Player 1 Won"
        gameStatus = false
    }
    if (player2.score == 11){
        text.innerText = "Player 2 Won"
        gameStatus = false
    }
}

function movement(dt){
    if (keys.w.pressed) player1.position.y -= paddleSpeed * dt;
    if (keys.s.pressed) player1.position.y += paddleSpeed * dt;
    if (keys.ArrowUp.pressed) player2.position.y -= paddleSpeed * dt;
    if (keys.ArrowDown.pressed) player2.position.y += paddleSpeed * dt;
    
    if (ball.position.x + ball.width > canvas.width){
        ball.position.x = (canvas.width/2)-50
        ball.position.y = (canvas.height/2)-50
        getRandomDirection()
        player1.score += 1
        ball.speed = 3
        text.innerText = (String(player1.score) + '-' + String(player2.score))
    }

    if (ball.position.x < 0){
        ball.position.x = (canvas.width/2)-50
        ball.position.y = (canvas.height/2)-50
        getRandomDirection()
        player2.score += 1
        ball.speed = 3
        text.innerText = (String(player1.score) + '-' + String(player2.score))
        
    }

    if((ball.position.x <= player1.position.x+player1.width || ball.position.x + ball.width <= player1.position.x+player1.width) && (ball.position.y + 50 >= player1.position.y && ball.position.y <= player1.position.y + player1.height)){
        direction.x *= -1;
        if(ball.speed <= 7){
            ball.speed+=0.5
        }
    }

    if((ball.position.x + ball.width >= player2.position.x || ball.position.x >= player2.position.x) && (ball.position.y + 50 >= player2.position.y && ball.position.y <= player2.position.y + player2.height)){
        direction.x *= -1;
        if(ball.speed <= 7){
            ball.speed+=0.5
        }
    }
    
    if(ball.position.y <=0 || ball.position.y + ball.height >= canvas.height){ direction.y *= -1 }
    ball.position.y += ball.speed * direction.y
    ball.position.x += ball.speed * direction.x
}

function gameLoop(timestamp){
    if (!lastTime) lastTime = timestamp;
    const dt = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    showWinner()

    if(gameStatus){requestAnimationFrame(gameLoop);}

    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width,canvas.height);

    movement(dt);

    player1.update();
    player2.update();
    ball.update();
}

gameLoop()