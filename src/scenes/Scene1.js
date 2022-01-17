import Player from '../entity/Player';
import Ground from '../entity/Ground';

export default class Scene1 extends Phaser.Scene {
    constructor() {
      super('Scene1');
    }

    //////////////////////////CLASS METHODS/////////////////////////////////////

    //////////////////////////////////PRELOAD//////////////////////////////////////////////////////////////
      
    preload () {  
      //background
      this.load.image('sky', 'assets/sky.png');
      //sprites 
      this.load.image('ground', 'assets/ground.png');
      //player
      this.load.spritesheet('lady', 'assets/lady.png', { frameWidth: 145, frameHeight: 286 });
    }

    //////////////////////////////////////////CREATE///////////////////////////////////////////////////////

    create () {
      //background
      this.add.image(400, 300, 'sky');
    
      //player
      this.player = new Player(this, 100, 0, 'lady');
      this.player.setBounce(0.2);
      this.player.setCollideWorldBounds(true);

      this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('lady', { start: 0, end: 3 }),
          frameRate: 10,
          repeat: -1
      });
  
      this.anims.create({
          key: 'turn',
          frames: [ { key: 'lady', frame: 4 } ],
          frameRate: 20
      });
  
      this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('lady', { start: 5, end: 8 }),
          frameRate: 10,
          repeat: -1
      });

      //ground
      this.groundGroup = this.physics.add.staticGroup({classType: Ground}); 
      this.groundGroup.create(400, 850, 'ground').refreshBody();

      //collisions
      this.physics.add.collider(this.player, this.groundGroup);

      //KEYBOARD MANAGER
      this.cursors = this.input.keyboard.createCursorKeys();
    }

    ///////////////////////////////////////////UPDATE////////////////////////////////////////////////////

    update () {
      this.player.update(this.cursors, this.jumpSound);
    }
  }
