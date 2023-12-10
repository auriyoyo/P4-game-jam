/* DECLARING VARIABLES */
// buttons
let playButton, helpButton, backButton, goButton, claw, encouragement;

// background imgs
let welcomeBgImg, helpBgImg, playBgImg, collectionBgImg, clawImg;

// prizes & prize imgs
let prize1, prize2, prize3, prize4, prize5, prize6, prize7, prize8, prize9;

let floor;

// other
let screen;
let count;
let font;



/* PRELOAD LOADS FILES */
function preload(){
  font = loadFont('assets/Jua-Regular.ttf');
  welcomeBgImg = loadImage('assets/welcomeBg.png');
  helpBgImg = loadImage('assets/helpBg.png');
  gameBgImg = loadImage('assets/gameBg.png');
  collectionBgImg = loadImage('assets/collectionBg.png');
  claw = loadImage('assets/claw.png');
}



/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,500);
  background(welcomeBgImg);
  textFont(font);
  textAlign(CENTER);
  collectionSize = 0;

  // INITIALIZE BUTTONS 
  textSize(40);
  playButton = new Sprite(width/2, 330, 160, 80);
  playButton.text = "PLAY";
  playButton.textColor = color(108, 140, 196);
  playButton.color = color(173, 204, 254);
  playButton.stroke = color(255, 255, 255);

  textSize(30);
  helpButton = new Sprite(width/2, 400, 160, 40);
  helpButton.text = "HELP";
  helpButton.textColor = color(140, 151, 106);
  helpButton.color = color(178, 212, 163);
  helpButton.stroke = color(255, 255, 255);
  
  textSize(20);
  backButton = new Sprite(width/2, 400, 40, 40);
  backButton.color = color(142, 118, 113);
  backButton.text = "<-";
  backButton.textColor = color(88, 67, 50);
  backButton.radius = 20;

  claw.resize(50,0);

  // START ON WELCOME
  count = 0;
  screen = 0;
  welcomeScreen();

}



/* DRAW LOOP REPEATS */
function draw() {
  //allSprites.debug = mouse.pressing();
  
  // welcome screen
  if(screen == 0){                     
    if(helpButton.mouse.presses()){    
      helpScreen();
      screen = 1;
      
    } else if(playButton.mouse.presses()){
      playScreenAssets();
      screen = 2;
    }
  }

  // back button
  if(screen == 1){
    if(backButton.mouse.presses()){
      welcomeScreen();
      screen = 0;
    }
  }
  
  /* 
  if(backButton.mouse.presses()){
    screen--;
    if(screen == 0){
      welcomeScreen();
      screen = 0;
    }
  }
  */

  // game screen
  if(screen == 2){
    gameScreen();
  }
}



/* FUNCTIONS */
// SCREENS
function welcomeScreen(){
  background(welcomeBgImg);

  // hide back button
  backButton.x = -200;

  // show play button
  playButton.x = width/2;
  playButton.y = 330;

  // show help button
  helpButton.x = width/2;
  helpButton.y = 400;
  
}

function helpScreen(){
  background(helpBgImg);

  // hide play and help buttons
  playButton.x = -200;
  helpButton.x = -200;

  // show back button
  backButton.x = width/2;
  backButton.y = 450;
}

function collectionScreen(){
  background(collectionBgImg);
  
  // hide play, help, and go buttons
  playButton.x = -200;
  helpButton.x = -200;
  goButton.x = -200;

  // hide game pieces
  prize1.visible = false;
  prize2.visible = false;
  prize3.visible = false;
  prize4.visible = false;
  prize5.visible = false;
  prize6.visible = false;
  prize7.visible = false;
  prize8.visible = false;
  prize9.visible = false;
  claw.visible = false;
  floor.visible = false;
  encouragement.visible = false;
}

function gameScreen(){
  background(gameBgImg);
  text("collection count: " + count, 230, 425, 150, 90);

  // hide play, help, and back buttons
  playButton.x = -200;
  helpButton.x = -200;
  backButton.x = -200;

  // claw control
  claw.speed = 3;
  if (kb.pressing('left')) {
    claw.direction = 180;
  } else if (kb.pressing('right')) {
    claw.direction = 0;
  } else if (kb.pressing('space')){
    claw.direction = "down";
    if(claw.collides(prize1)){
      claw.y = 100;
      text("");
      prize1.x = 86;
      prize1.y = 430;
      prize1.collider = 's';
      encouragement.text = "nice!";
      count++;
    }
    if(claw.collides(prize2)){
      claw.y = 100;
      text("");
      prize2.x = 86;
      prize2.y = 430;
      prize2.collider = 's';
      encouragement.text = "a little closer!";
      count++;
    }
    if(claw.collides(prize3)){
      claw.y = 100;
      text("");
      prize3.x = 86;
      prize3.y = 430;
      prize3.collider = 's';
      encouragement.text = "doing good!";
      count++;
    }
    if(claw.collides(prize4)){
      claw.y = 100;
      text("");
      prize4.x = 86;
      prize4.y = 430;
      prize4.collider = 's';
      encouragement.text = "great!";
      count++;
    }
    if(claw.collides(prize5)){
      claw.y = 100;
      text("");
      prize5.x = 86;
      prize5.y = 430;
      prize5.collider = 's';
      encouragement.text = "you got it!";
      count++;
    }
    if(claw.collides(prize6)){
      claw.y = 100;
      text("");
      prize6.x = 86;
      prize6.y = 430;
      prize6.collider = 's';
      encouragement.text = "score!";
      count++;
    }
    if(claw.collides(prize7)){
      claw.y = 100;
      text("");
      prize7.x = 86;
      prize7.y = 430;
      prize7.collider = 's';
      encouragement.text = "almost done!";
      count++;
    }
    if(claw.collides(prize8)){
      claw.y = 100;
      text("");
      prize8.x = 86;
      prize8.y = 430;
      prize8.collider = 's';
      encouragement.text = "woah!";
      count++;
    }
    if(claw.collides(prize9)){
      claw.y = 100;
      text("");
      prize9.x = 86;
      prize9.y = 430;
      prize9.collider = 's';
      encouragement.text = "yay!";
      count++;
    }
  } else {
    claw.speed = 0;
  }

  if(count >= 9){
    collectionScreen();
  }
  
  // boundaries
  if(claw.x < 10){
    claw.x = 10;
  } else if(claw.x > 390){
    claw.x = 390;
  }
  
  if(claw.y > 230){
    claw.y = 100;
  } 

  if(prize1.x < 50){
    prize1.x = 50;
  } else if(prize1.x > 350){
    prize1.x = 350;
  }
  if(prize2.x < 50){
    prize2.x = 50;
  } else if(prize2.x > 350){
    prize2.x = 350;
  }
  if(prize3.x < 50){
    prize3.x = 50;
  } else if(prize3.x > 350){
    prize3.x = 350;
  }
  if(prize4.x < 50){
    prize4.x = 50;
  } else if(prize4.x > 350){
    prize4.x = 350;
  }
  if(prize5.x < 50){
    prize5.x = 50;
  } else if(prize5.x > 350){
    prize5.x = 350;
  }
  if(prize6.x < 50){
    prize6.x = 50;
  } else if(prize6.x > 350){
    prize6.x = 350;
  }
  if(prize7.x < 50){
    prize7.x = 50;
  } else if(prize7.x > 350){
    prize7.x = 350;
  }
  if(prize8.x < 50){
    prize8.x = 50;
  } else if(prize8.x > 350){
    prize8.x = 350;
  }
  if(prize9.x < 50){
    prize9.x = 50;
  } else if(prize9.x > 350){
    prize9.x = 350;
  }
}

// ASSETS
function playScreenAssets(){
  textSize(20);
  goButton = new Sprite(350, 350, 160, 80);
  goButton.text = "GO!";
  goButton.textColor = color(227, 231, 218);
  goButton.color = color(140, 151, 106);
  goButton.radius = 25;
  goButton.collider = 'k';

  encouragement = new Sprite(300,485,190,20);
  encouragement.color = color(254,227,202);
  encouragement.stroke = color(254,227,202);
  encouragement.collider = 's';

  claw = new Sprite(claw, width/2, 100, 20, 80);
  claw.color = color(95,158,160);
  claw.collider = 'k';

  world.gravity.y = 5;

  floor = new Sprite();
	floor.y = 260;
	floor.w = 400;
	floor.h = 10;
  floor.color = color(75,73,73);
  floor.stroke = color(75,73,73);
	floor.collider = 'k';

  prize1 = new Sprite();
  prize1.color = color(253,192,238);
  prize1.radius = 30;
  prize1.pos = {x: 30, y:100};

  prize2 = new Sprite();
  prize2.color = color(173,219,255);
  prize2.radius = 30;
  prize2.pos = {x: 60, y:100};
  prize2.vel.y = 2;

  prize3 = new Sprite();
  prize3.color = color(250,215,147);
  prize3.radius = 30;
  prize3.pos = {x: 100, y:100};

  prize4 = new Sprite();
  prize4.color = color(187,185,243);
  prize4.radius = 30;
  prize4.pos = {x: 130, y:100};
  prize4.vel.y = 2;

  prize5 = new Sprite();
  prize5.color = color(250,215,147);
  prize5.radius = 30;
  prize5.pos = {x: 170, y:100};

  prize6 = new Sprite();
  prize6.color = color(173,219,255);
  prize6.radius = 30;
  prize6.pos = {x: 200, y:100};
  prize6.vel.y = 2;

  prize7 = new Sprite();
  prize7.color = color(253,192,238);
  prize7.radius = 30;
  prize7.pos = {x: 250, y:100};

  prize8 = new Sprite();
  prize8.color = color(173,219,255);
  prize8.radius = 30;
  prize8.pos = {x: 280, y:100};
  prize8.vel.y = 2;

  prize9 = new Sprite();
  prize9.color = color(187,185,243);
  prize9.radius = 30;
  prize9.pos = {x: 300, y:100};
  
}
