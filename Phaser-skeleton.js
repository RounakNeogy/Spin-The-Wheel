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
}
function create(){
    console.log("Create");
}

//Game Loop
function update(){
    console.log("Inside Update");
}
