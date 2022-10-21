import { Player } from './player.js';
import { InputHandler } from './input.js';
import { Background } from './bakground.js';

export class Game {
 constructor(width, height) {
  this.width = width;
  this.height = height;
  this.groundMargin = 80;
  this.speed = 0;
  this.gameSpeedModifier = 10;
  this.background = new Background(this);
  this.player = new Player(this);
  this.input = new InputHandler();
 }
 update(deltaTime) {
  this.background.update();
  this.player.update(this.input.keys, deltaTime);
 }
 draw(context) {
  this.background.draw(context);
  this.player.draw(context);
 }
}