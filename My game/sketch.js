var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score=0;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var happy,sad,dance,party,laughing,balloon,confetti,thumbs;
var smiley;
var smileyGroup;

function preload(){
  back_img = loadImage("images/bg.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();

  happy = loadImage("images/happy.png");
  sad = loadImage("images/sad.png");
  dance = loadImage("images/dance.png");
  laughing = loadImage("images/laughing.png");
  party = loadImage("images/party.png");
  balloon = loadImage("images/balloons.png");
  confetti = loadImage("images/confetti.png");
  thumbs = loadImage("images/thumbs.png");
  smileyGroup = new Group();

}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
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