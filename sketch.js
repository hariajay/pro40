var database;
var gameState =0;
var playerCount = 0;
var allPlayers;
var player,form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var bg,f1,f2,f3,f4,f5;
var player_img;

function preload(){
  bg = loadImage("jungle.jpg");
  player_img = loadImage("basket.png");
  f1 = loadImage("apple.png");
  f2 = loadImage("melon.png");
  f3 = loadImage("orange.png");
  f4 = loadImage("pineapple.png");
  f5 = loadImage("banana.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(700,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start(); 
}

function draw() {
  background(bg);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
     game.end();
   }
}