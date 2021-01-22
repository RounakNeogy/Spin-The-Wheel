
let prizes_config = {
    count:12,
    prize_names : ["3000 Credits","35% Off","Hard Luck","70% OFF","Swagpack","100% OFF","Netflix","50% Off","Amazon Voucher","2 Extra Spin", "CB Tshirt","CB Book"]
}
//How to  create basic skeleton for the game->Game Loop
let config ={
    type : Phaser.CANVAS,
    width: 800,
    height:600,
    backgroundColor: 0xffcc00,
    scene : {
        //1.loading the assets
        //2.create the assets as objects in the memory
        //3.continuously update the different objects accoding to the game logic
        preload: preload,
        create:create,
        update:update,
    }
};

let game = new Phaser.Game(config);

function preload(){
    console.log("Preload");
    //load object
    this .load.image('background','back.jpg');
    this .load.image('wheel','wheel.png');
    this .load.image('pin','pin.png');
    this .load.image('stand','stand.png');
    this .load.audio('spin_sound','sound1.mp3');
}
var music;
function create(){
    console.log("Create");
    //create the background image
    let w=game.config.width;
    let h=game.config.height;

    //images are called sprites in phaser
    let background=this.add.sprite(0,0,'background');
    background.setPosition(w/2,h/2);
    background.setScale(0.15);
    
    
    //adding the wheel 
    this.wheel=this.add.sprite(0,0,'wheel');
    this.wheel.setPosition(w/2,h/2);
    this.wheel.setScale(0.15);
    this.wheel.depth=1;
    //adding the pin
    let pin=this.add.sprite(w/2,h/2-155,'pin');
    pin.setScale(0.15);
    pin.depth=2;
    
    //add the stand
    let stand=this.add.sprite(w/2,h/2+155,'stand');
    stand.setScale(0.15);
    //event listener
    this.input.on("pointerdown",spinwheel,this);
    //lets create a text object
    font_style={
        font:"bold 20px Arial",
        align:"center",
        color:"red",
    }
    this.game_text=this.add.text(30,10,"Welcome to the game",font_style);
    //music = game.add.audio('spin_sound',0.3);
    //music.play();
   
    
}

//Game Loop
function update(){
    console.log("Inside Update");
    
    //rotating the wheel
    //this.wheel.angle+=5;
    
    //diminishes the wheel
    //this.wheel.alpha-=0.01; 
    
}
function spinwheel(){
    console.log("Clicked");
    
    //checking the working of event listener
    this.game_text.setText("Clicked!!");
    
    let rounds=Phaser.Math.Between(2,4);
    let degrees=Phaser.Math.Between(0,11)*30;
    
    let total_angle=rounds*360+degrees;
    console.log(total_angle);
    
    let idx = prizes_config.count - 1 - Math.floor(degrees/(360/prizes_config.count));
    
    tween = this.tweens.add({
        targets:this.wheel,
        angle:total_angle,
        ease:"Cubic.easeOut",
        duration:6000,
        //scaleX:0.5,
        //scaleY:0.5,
        callbackScope:this,
        onComplete:function(){
           this.game_text.setText(prizes_config.prize_names[idx]);
        },
        
    });

}