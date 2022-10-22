import { Player } from './player.js';
import { InputHandler } from './input.js';
import { Background } from './bakground.js';
import { ClimbingEnemy, FlyingEnemy, GroundEnemy } from './Enemy.js';
import { UI } from './ui.js';

export class Game {
 constructor(width, height) {
  this.width = width;
  this.height = height;
  this.groundMargin = 80;
  this.speed = 0;
  this.gameSpeedModifier = 5;
  this.background = new Background(this);
  this.player = new Player(this);
  this.input = new InputHandler(this);
  this.ui = new UI(this);
  this.enemies = [];
  this.enemyTimer = 0;
  this.enemyInterval = 1000;
  this.debug = false;
  this.score = 0;
  this.fontColor = 'red';
 }
 update(deltaTime) {
  this.background.update();
  this.player.update(this.input.keys, deltaTime);

  // handleEnemies
  if(this.enemyTimer > this.enemyInterval) {
    this.addEnemy();
    this.enemyTimer = 0;
  } else {
    this.enemyTimer += deltaTime;
  }

  this.enemies.forEach(enemy => {
    enemy.update(deltaTime);

    if(enemy.markedForDeletion) {
      this.enemies.splice(this.enemies.indexOf(enemy), 1);
    }
  })
 }
 draw(context) {
  this.background.draw(context);
  this.player.draw(context);

  this.enemies.forEach(enemy => {
    enemy.draw(context);
  });
  this.ui.draw(context);
 }
 addEnemy() {
  if(this.speed > 0 && Math.random() < 0.5) {
    this.enemies.push(new GroundEnemy(this));
  } else if( this.speed > 0) {
    this.enemies.push(new ClimbingEnemy(this));
  }
  this.enemies.push(new FlyingEnemy(this));
  console.log(this.enemies);
 }
}