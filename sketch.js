const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow1, snow2,snow3,snow4,snow5;
var backgroundImg,platform; 
var bg = "sprites/snow2.png";

function preload() {
}
this.image = loadImage("sprites/snow1.jpg");
this.image = loadImage("sprites/snow2.jpg");
this.image = loadImage("sprites/snow3.jpg");
this.image = loadImage("sprites/snow4.webdp");
this.image = loadImage("sprites/snow5.webdp");

function setup() {
  createCanvas(800,400);
}

function draw() {
background("sprites/snow2.jpg");

  drawSprites();
}
