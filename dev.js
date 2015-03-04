function DiceGame() {
  this.turns = 0;
  this.point = 0;
  this.betAmt = 0;
  this.diceOne = 0;
  this.diceTwo = 0;
  this.roll = 0;
  this.rollMessage = 'Welcome!'
  document.getElementById('roll').addEventListener('click', function() {
    this.rollDice();
  }.bind(this));

  document.getElementsByClassName('placeBet')[0].addEventListener('click', function() {
    document.getElementById('modalWindow').setAttribute("class", "hide-modal");
    this.betIt(0);
  }.bind(this));
  this.updateUI();
}

DiceGame.prototype.updateUI = function() {
  var dice1P = document.getElementById('dice1p'),
      dice2p = document.getElementById('dice2p'),
      rollBtn = document.getElementById('roll'),
      currPoint = document.getElementById('currPoint'),
      rollp = document.getElementById('rollp'),
      currRoll = document.getElementById('currRoll'),
      diceOneDiv = document.getElementById('diceOneDiv'),
      diceTwoDiv = document.getElementById('diceTwoDiv'),
      bet = document.getElementById('bet'),
      placeBet = document.getElementById('placeBet');
  dice1p.innerHTML = this.diceOne.toString();
  dice2p.innerHTML = this.diceTwo.toString();
  rollp.innerHTML = this.rollMessage;
  currRoll.innerHTML = "The current turn is : " + this.turns;
  bet.innerHTML = "Bet is " + this.betAmt;
  currPoint.innerHTML = "The current point is : " + this.point;
  diceOneDiv.setAttribute("class", "value" + this.diceOne);
  diceTwoDiv.setAttribute("class", "value" + this.diceTwo);
}
DiceGame.prototype.betIt = function(num) {
  this.betAmt = parseInt(document.getElementsByClassName('betAmt')[num].value);
  this.updateUI();
}
DiceGame.prototype.betItLoser = function() {
  this.betAmt = parseInt(document.getElementById('betAmtLoser').value);
  this.updateUI();
}

DiceGame.prototype.loserScreen = function() {
  if (this.betAmt <= 0) {
      var loserScreen = document.getElementById('loserScreen');
      loserScreen.setAttribute("class", "show-modal");
      document.getElementsByClassName('placeBet')[1].addEventListener('click', function() {
      document.getElementById('loserScreen').setAttribute("class", "hide-modal");
      this.betIt(1);
    }.bind(this));
  }
}

DiceGame.prototype.win = function() {
  this.rollMessage = 'You Win!'
  this.turns = 0;
  this.betAmt *= 2;
  this.point = 0;
  this.updateUI();
}
DiceGame.prototype.lose = function() {
  this.rollMessage = 'You Lose!';
  this.turns = 0;
  this.betAmt -= this.betAmt;
  this.point = 0;
  this.loserScreen();
  this.updateUI();
}
DiceGame.prototype.rollDice = function() {
  this.diceOne = Math.floor(Math.random() * 6) + 1; //1-6
  this.diceTwo = Math.floor(Math.random() * 6) + 1; //1-6
  this.roll = this.diceOne + this.diceTwo;
  this.turns++;
  // console.log(this.roll);
  this.updateUI();
  //Did we win or lose?
  if (this.turns === 1) {
    if(this.roll === 7 || this.roll === 11) {
      this.win();
    } else if (this.roll === 2 || this.roll === 3 || this.roll === 12) {
      this.lose();
    } else {
      this.point = this.roll;
      this.rollMessage = 'Playing the point!'
      this.updateUI();
    }
  } 
  if (this.turns >= 2) {
    if (this.roll === this.point) {
      this.win();
    }

    if (this.roll === 7 || this.roll === this.point) {
      this.lose();
    }
  }
  
}

// Start it up
var d = new DiceGame();