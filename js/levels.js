// create level object to hold brick and ball objects
function Level(currentLevel) {
  this.currentLevel = currentLevel;
  this.levelConstructs = [
    [['Player',368,550,250,65,15,'red',0],
    ['Inert',50,0,50,100,25,'black',10],
    ['Inert',150,0,50,100,25,'white',10],
    ['Inert',250,0,50,100,25,'black',10],
    ['Inert',350,0,50,100,25,'white',10],
    ['Inert',450,0,50,100,25,'black',10],
    ['Inert',550,0,50,100,25,'white',10],
    ['Inert',650,0,50,100,25,'black',10],
    ['Inert',50,0,75,100,25,'white',10],
    ['Inert',150,0,75,100,25,'black',10],
    ['Inert',250,0,75,100,25,'white',10],
    ['Inert',350,0,75,100,25,'black',10],
    ['Inert',450,0,75,100,25,'white',10],
    ['Inert',550,0,75,100,25,'black',10],
    ['Inert',650,0,75,100,25,'white',10],
    ['Inert',50,0,100,100,25,'black',10],
    ['Inert',150,0,100,100,25,'white',10],
    ['Inert',250,0,100,100,25,'black',10],
    ['Inert',350,0,100,100,25,'white',10],
    ['Inert',450,0,100,100,25,'black',10],
    ['Inert',550,0,100,100,25,'white',10],
    ['Inert',650,0,100,100,25,'black',10],
    ['Inert',50,0,125,100,25,'white',10],
    ['Inert',150,0,125,100,25,'black',10],
    ['Inert',250,0,125,100,25,'white',10],
    ['Inert',350,0,125,100,25,'black',10],
    ['Inert',450,0,125,100,25,'white',10],
    ['Inert',550,0,125,100,25,'black',10],
    ['Inert',650,0,125,100,25,'white',10]],
    [],[]];
  this.bricks = [];
  this.balls = [];
  this.getCurrentLevelprops();
  this.makeBall(394,538);
}

Level.prototype.makeBall = function(x,y){
  var ball = new Ball(x,y,12,12,6,-6,"white");
  ball.launched = false;
  this.balls.push(ball);
};

Level.prototype.getCurrentLevelprops = function() {
  for (var i = 0; i < this.levelConstructs[this.currentLevel-1].length; i++) {
    var pushtype = this.levelConstructs[this.currentLevel-1][i][0];
    var pushx = this.levelConstructs[this.currentLevel-1][i][1];
    var pushy = this.levelConstructs[this.currentLevel-1][i][2];
    var pushFinalY = this.levelConstructs[this.currentLevel-1][i][3];
    var width = this.levelConstructs[this.currentLevel-1][i][4];
    var height = this.levelConstructs[this.currentLevel-1][i][5];
    var pushcolor = this.levelConstructs[this.currentLevel-1][i][6];
    var pushScore = this.levelConstructs[this.currentLevel-1][i][7];
    var newBrick = new Brick(pushtype,pushx,pushy,pushFinalY,width,height,pushcolor,pushScore)
    if(pushtype === 'Player') {
      newBrick.player = true;
    }
    this.bricks.push(newBrick);
  }
};
