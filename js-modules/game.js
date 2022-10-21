import { Player } from './player.js';
import { InputHandler } from './input.js';

export class Game {
 constructor(width, height) {
  this.width = width;
  this.height = height;
  this.groundMargin = 50;
  this.player = new Player(this);
  this.input = new InputHandler();
 }
 update(deltaTime) {
  this.player.update(this.input.keys, deltaTime);
 }
 draw(context) {
  this.player.draw(context);
 }
}