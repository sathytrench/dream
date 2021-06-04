/** @type {import("../typings/phaser")} */

import Phaser from 'phaser';
import config from './config/config';
import Scene1 from './scenes/Scene1';

class Game extends Phaser.Game {
    constructor() {
      super(config);
  
      this.scene.add('Scene1', Scene1);
      
      this.scene.start('Scene1');
    }
  }
  
  window.onload = function () {
    window.game = new Game();
  }
  