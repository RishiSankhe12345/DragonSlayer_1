var player1, player2, player3, player4;
var dragon;
var monsters;
var gameState = 0;
var database;
var form, player, game;
var ground;

function preload(){
ground = loadImage('sprites/Forest.jpg')
//player1_img = loadImage('sprites/player1.png')
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
}

function draw() {
  //background(ground)
}
